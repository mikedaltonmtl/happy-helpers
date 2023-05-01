import { useState } from 'react';
// import prisma from "../../../prisma/.db";
import { allTasks } from '../../../mock-data/tasks';
import { loggedInUser, allUsers } from '../../../mock-data/users';
import { addresses } from '../../../mock-data/addresses';
import { offers } from '../../../mock-data/offers';


// Component dependencies
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Helper function dependencies
// import addCoordsToTasks from "@/helpers/add-coords-to-tasks";
// import addCoordsToUser from "@/helpers/add-coords-to-user";
// import addDistanceToTasks from "@/helpers/add-distance-to-tasks";
import ProfileTaskRow from "@/components/ProfileTaskRow";
import ProfileSidebar from "@/components/ProfileSidebar";

export default function ProfilePage({ user, upcomingData, pastData, loggedInUser }) {
  // HOOKS
  const [userData, setUserData] = useState(user);

  const [showEditProfileForm, setShowEditProfileForm] = useState(false);
  const [editProfileFormData, setEditProfileFormData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    description: userData.description,
    email: userData.email,
    phone: userData.phone,
    address: userData.address.address,
    city: userData.address.city,
    postcode: userData.address.postcode,
    skills: userData.skills,
  });

  const [upcomingTasksData, setUpcomingTasksData] = useState(upcomingData);
  const [pastTasksData, setPastTasksData] = useState(pastData);

  // HELPER FUNCTIONS
  const toggleEditProfileForm = () => {
    setShowEditProfileForm(!showEditProfileForm);
  };

  // TEMPLATE
  return (
    <>
      <main className="font-fredoka">
        <NavBar name={loggedInUser.firstName} id={loggedInUser.id} />
        <div className="flex w-[100%]">
          <div >
            <ProfileSidebar
              userData={userData}
              showEditProfileForm={showEditProfileForm}
              toggleEditProfileForm={toggleEditProfileForm}
              editProfileFormData={editProfileFormData}
              setEditProfileFormData={setEditProfileFormData}
            />
          </div>
          <div className="flex flex-col w-[100%] ml-4 mr-8 mt-8 overflow-hidden">
            <div>
              {user.id === 1 &&
                <h1 className="uppercase text-teal-600 px-10 font-semibold text-2xl ml-10">
                  Your Upcoming Tasks:
                </h1>
              }
              {user.id !== 1 &&
                <h1 className="uppercase text-teal-600 px-10 font-semibold text-2xl ml-10">
                  {user.firstName}&apos;s Upcoming Tasks:
                </h1>
              }
              <h1 className="uppercase text-teal-600 px-10 font-semibold t-lg ml-10">
                {upcomingTasksData.length} Available
              </h1>
              <ProfileTaskRow rowType="upcoming" tasks={upcomingTasksData} />
            </div>
            <div className="pt-4">
              {user.id === 1 &&
                <h1 className="uppercase text-teal-600 px-10 font-semibold text-2xl ml-10">
                  Your Past Tasks:
                </h1>
              }
              {user.id !== 1 &&
                <h1 className="uppercase text-teal-600 px-10 font-semibold text-2xl ml-10">
                  {user.firstName}&apos;s Past Tasks:
                </h1>
              }
              <h1 className="uppercase text-teal-600 px-10 font-semibold t-lg ml-10">
                {pastTasksData.length} Available
              </h1>
              <ProfileTaskRow rowType="past" tasks={pastTasksData} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// DATA FETCHING
export const getServerSideProps = async function(context) {

  const profileId = context.params.id;
  const user = allUsers.find(user => user.id === Number(profileId));
  const profileAddress = addresses.find(address => address.id === user.addressId);
  user.address = { ...profileAddress };

  // Get all offers for the profile's id, where the status is ACCEPTED
  const acceptedProfileOffers = offers.filter(offer => offer.userId === Number(profileId) && offer.status === 'ACCEPTED');
  // Get the profiles taskId's from the accepted offers
  const profilesTaskIds = acceptedProfileOffers.map(item => item.taskId);
  // Build an array of the profile's tasks from these taskIds
  const profilesTasks = [];
  for (const task of allTasks) {
    if (profilesTaskIds.includes(task.id)) {
      profilesTasks.push(task);
    }
  }
  // Use the task's addressId to add the city to each task
  const tasksWithAddressesAndDistance = profilesTasks.map(task => {

    const cityToAdd = addresses.find(address => address.id === task.addressId).city;
    task.address = { city: cityToAdd };

    // Add a random distance, as we won't be able to calculate on the fly without the googlemaps api
    const randomDistance = Math.floor(Math.random() * 50) + 1;
    task.distance = randomDistance;
    return task;
  });

  const upcomingData = tasksWithAddressesAndDistance.filter(task => task.status === 'PENDING');
  const pastData = tasksWithAddressesAndDistance.filter(task => task.status === 'COMPLETE');

  return {
    props: {
      user,
      loggedInUser,
      userAddress: user.address,
      upcomingData: upcomingData,
      pastData: pastData
    }
  };
  /*
  //////// User table user profile data /////////

  // Get url slug for profile page dynamically from url to be used as userId.
  const { id } = context.query;

  // Get user table profile data and include address data
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id)
    },
    include: {
      address: true,
    }
  });

  //logged in user
  // const loggedInUser = await prisma.user.findUnique({
  //   where: {
  //     id: 1
  //   }
  // });

  ///////// Task table user profile data /////////

  // Get tasks where offer is complete for userId
  const userPastOffersComplete = await prisma.offer.findMany({
    where: {
      userId: parseInt(user.id),
      status: 'ACCEPTED'
    },
    include: {
      task: {
        include: {
          address: true
        }
      }
    }
  });

  // Get all tasks data for user based on offers complete for the user
  const tasksData = userPastOffersComplete.map((item) => {
    return item.task;
  });

  const addresses = await prisma.address.findMany();
  
  // Add city, latitude, longitude to tasksData
  addCoordsToTasks(tasksData, addresses);

  // Add city, latitude, longitude to user
  addCoordsToUser(user, addresses);

  // Add distance to tasksData
  addDistanceToTasks(tasksData, user);
  
  
  // Extract upcoming tasks data
  const upcomingData = tasksData.filter(item => {
    return item.status === 'PENDING';
  });

  // Extract past tasks data
  const pastData = tasksData.filter(item => {
    return item.status === 'COMPLETE';
  });

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      loggedInUser: JSON.parse(JSON.stringify(loggedInUser)),
      userAddress: JSON.parse(JSON.stringify(user.address)),
      upcomingData: JSON.parse(JSON.stringify(upcomingData)),
      pastData: JSON.parse(JSON.stringify(pastData)),
    }
  };
  */
};