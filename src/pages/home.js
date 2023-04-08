import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Inter } from 'next/font/google';
import { PrismaClient } from '@prisma/client';

// Helper functions
import getDistance from '../helpers/get-distance';

// Component dependencies
import TaskList from '@/components/TaskList';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import PageHeader from '@/components/PageHeader';

// Global variables
const inter = Inter({ subsets: ['latin'] });
const sidebarOptions = [
  'All Tasks',
  'Errands',
  'Housework',
  'Personal Care',
  'Tech Support',
  'Charity & Causes'
];

export default function Home({ tasks }) {
  // console.log(tasks);

  // Hooks
  const [fetchTasks, setFetchTasks] = useState(tasks);
  const [sidebar, setSidebar] = useState(sidebarOptions);
  const [selectedSidebar, setSelectedSidebar] = useState(sidebar[0]);
  // const [category, setCategory] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await axios.post('http://localhost:3000/api/tasks', fetchTasks);
  //     return data;
  //   };
  //   const theFetcher = fetchData();
  // console.log(theFetcher);
  // });
  // console.log(fetchTasks);

  // useEffect (() => {
  //   setFetchTasks((prev) => {
  //     prev.filter(item => ) 
  //   })

  // }, [selectedSidebar])

  // Template
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral-100">
        <NavBar />
        <div className="flex">
          <Sidebar
            sidebarOptions={sidebar}
            setSelectedSidebar={setSelectedSidebar}
          />
          <section className='flex flex-col px-20'>
            <PageHeader />
            <TaskList tasks={fetchTasks} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Data fetching
export async function getServerSideProps() {
  // const tasks = await axios.get('http://localhost:3000/api/tasks');
  // console.log(tasks.data)
  const prisma = new PrismaClient();
  const tasks = await prisma.task.findMany()

  // distance sandbox
  const user1 = await prisma.user.findUnique({
    where: {
      id: 1
    }
  })

  const user2 = await prisma.user.findUnique({
    where: {
      id: 2
    }
  })

  const user1AddId = user1.addressId;
  const location1 = await prisma.address.findUnique({
    where: {
      id: parseInt(user1AddId)
    }
  })

  const lat1 = location1.latitude;
  const lon1 = location1.longitude;

  const user2AddId = user2.addressId;
  const location2 = await prisma.address.findUnique({
    where: {
      id: parseInt(user2AddId)
    }
  })

  const lon2 = location2.longitude;
  const lat2 = location2.latitude;
  console.log(lat1, lon1, lat2, lon2);

  const distance = getDistance(lat1, lon1, lat2, lon2);
  console.log(location1)
  console.log(location2)
  console.log(` The distance between the two places is ${Math.round(distance)}km`)


  // console.log(tasks)
  return {
    props: { tasks: tasks }
  };
}
