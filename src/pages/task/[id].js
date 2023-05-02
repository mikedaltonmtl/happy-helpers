import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import axios from "axios";
import DetailedTaskRow from "@/components/DetailedTaskRow";
import TaskRow from "@/components/TaskRow";
// import prisma from "../../../prisma/.db";
import { useState } from "react";
import addDistanceToTasks from '../../helpers/add-distance-to-tasks';
import { loggedInUser, allUsers } from '../../../mock-data/users';
import { offers } from '../../../mock-data/offers';
import { sortedTasks } from '../../../mock-data/tasks';


export default function TaskPage({ selectedTask, selectedUser, userTasks, offers, userAddress, similarTasks, loggedInUser }) {

  const [selectedId, setSelectedId] = useState(selectedTask.id);

  const sendOffer = async(taskId, userId, setOffer) => {
    await axios.post('http://localhost:3000/api/offers', [taskId, userId])
      .then(setOffer(true));

    const params = {
      userId: selectedUser.id,
      type: 'RECEIVED',
      cpId: loggedInUser.id,
      cpName: `${loggedInUser.firstName} ${loggedInUser.lastName}`,
      taskName: userTasks.find(task => task.id === taskId).name
    };
    // await axios.post(`http://localhost:3000/api/messages/`, { params });
  };

  const setScroll = (id, rowType) => {
    setTimeout(function() {
      if (typeof window !== "undefined") {
        const scrollPos = document.querySelector(`#${id}`).offsetLeft;
        const scrollBox = document.querySelector(`#scrollbox${rowType}`);
        scrollBox.scrollLeft = (scrollPos - 200);
        console.log(scrollPos);
        console.log(scrollBox.scrollLeft);
      }
    }, 100);
  };


  return (
    <>
      <main className="font-fredoka">
        <NavBar name={loggedInUser.firstName}
          id={loggedInUser.id} />
        <div className="">
          <h1 className="uppercase text-teal-600 px-10 font-semibold text-2xl">{selectedUser.firstName}&apos;s Tasks:</h1>
          <h1 className="uppercase text-teal-600 px-10 font-semibold t-lg">{userTasks.length} Available</h1>
          <p></p>
          <div className="">
            <DetailedTaskRow
              setScroll={setScroll}
              sendOffer={sendOffer}
              selectedId={selectedId}
              selectedUser={selectedUser}
              userTasks={userTasks}
              offers={offers}
              userAddress={userAddress}
              rowType="userTasks"
              setSelectedId={setSelectedId}
            />
          </div>
        </div>
        <div>
          <h1 className="uppercase text-teal-600 px-10 mt-10 font-semibold text-2xl">Similar Tasks:</h1>
          <div className="">
            <TaskRow
              setScroll={setScroll}
              userTasks={similarTasks}
              rowType="similar"
              changeId={setSelectedId}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps = async function(context) {

  const taskId = context.params.id;
  const loggedInUsersOffers = offers.filter(offer => offer.user.id === 1);
  const selectedTask = sortedTasks.find(task => task.id === Number(taskId));
  // current user is the one requesting help with the task
  const currentUser = allUsers.find(user => user.id === selectedTask.userId);
  const userTasks = sortedTasks.filter(task => task.userId === selectedTask.userId && task.status === "OPEN");
  const similarTasks = sortedTasks.filter(task => task.category === selectedTask.category && task.status === "OPEN");
  console.log('similarTasks', similarTasks);

  return {
    props: {
      selectedTask,
      selectedUser: currentUser,
      userTasks,
      offers: loggedInUsersOffers,
      similarTasks,
      loggedInUser
    }
  };
  /*
  // Capture tasks and addresses and users
  const selectedTask = await prisma.task.findUnique({
    where: {
      id: Number(taskId)
    }
  });

  // Define current user
  const currentUser = await prisma.user.findUnique({
    where: {
      id: selectedTask.userId
    }
  });

  // Define current users tasks
  const userTasks = await prisma.task.findMany({
    where: {
      userId: selectedTask.userId,
      status: "OPEN"
    },
    include: {
      address: true,
    }
  });

  // All offers of logged in user
  const offers = await prisma.offer.findMany({
    where: {
      userId: 1
    }
  });

  //similar tasks by category but not current user
  const similarTasks = await prisma.task.findMany({
    where: {
      category: selectedTask.category,
      status: "OPEN"
    },
    include: {
      address: true
    },
  });

  // const loggedInUser = await prisma.user.findUnique({
    where: {
      id: 1
    },
    include: {
      address: true
    }
  });

  addDistanceToTasks(userTasks, loggedInUser);
  addDistanceToTasks(similarTasks, loggedInUser);

  return {
    props: {
      selectedTask: JSON.parse(JSON.stringify(selectedTask)),
      selectedUser: JSON.parse(JSON.stringify(currentUser)),
      userTasks: JSON.parse(JSON.stringify(userTasks)),
      offers: JSON.parse(JSON.stringify(offers)),
      similarTasks: JSON.parse(JSON.stringify(similarTasks)),
      loggedInUser: JSON.parse(JSON.stringify(loggedInUser)),
    }
  };
  */
};