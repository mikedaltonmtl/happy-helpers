import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import TaskForm from '@/components/TaskForm';
import { useState } from 'react';
// import prisma from '../../prisma/.db';
import { loggedInUser } from '../../mock-data/users';

export default function NewTask(props) {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    startDate: "",
    endDate: "",
    category: "",
    nbHelpers: "",
    image: "",
    address: "",
    city: "",
    postcode: "",
    startTime: {
      hour: "1",
      minute: "00",
      ampm: "PM"
    },
    endTime: {
      hour: "1",
      minute: "00",
      ampm: "PM"
    }
  });

  return (
    <>
      <main className="full-height">
        <NavBar name={props.user.firstName} id={props.user.id} />
        <div className="flex justify-center">
          <TaskForm formData={formData} setFormData={setFormData} user={props.user} />
        </div>
      </main>
      <Footer />
    </>
  );
}
export const getServerSideProps = async function() {

  return {
    props: { user: loggedInUser }
  };

  /*
  const user = await prisma.user.findUnique({
    where: {
      id: 1
    },
    include: {
      address: true
    }
  })

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    }
  }
  */
};