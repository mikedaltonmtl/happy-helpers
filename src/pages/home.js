// Vendor methods
import { useState } from 'react';
// import prisma from '../../prisma/.db';

// Mock data
import { loggedInUser } from '../../mock-data/users';
import { sortedTasks } from '../../mock-data/tasks';

// Helper functions
// import addDistanceToTasks from '../helpers/add-distance-to-tasks';
import sortTasksByDistance from '../helpers/sort-tasks-by-distance';
import sortTasksByStartTime from '../helpers/sort-tasks-by-start-time';

// Component dependencies
import TaskList from '@/components/TaskList';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import PageHeader from '@/components/PageHeader';
import Map from '@/components/Map';

// Global variables
const sidebarOptions = [
  'All Categories',
  'Animal Care',
  'Charity & Causes',
  'Cooking',
  'DIY',
  'Driving',
  'Errands',
  'Giving',
  'Heavy Lifting',
  'Housework',
  'Personal Care',
  'Social',
  'Tech Support',
  'Yard Work',
  'Other'
];

const distances = [
  1, 2, 5, 10, 25, 'all'
];

/////////////////////
// Page (component)
export default function Home({ tasks, user }) {

  // Hooks
  const [fetchTasks, setFetchTasks] = useState([...tasks]);
  const [view, setView] = useState("List");
  const [filteredTasks, setFilteredTasks] = useState([...tasks]);

  const tasksToFilter = [...fetchTasks];
  const [taskFilters, setTaskFilters] = useState({
    distance: 25,
    category: 'All Categories',
    sort: 'Date',
    dateFilter: null,
    city: ''
  });

  const [category, setCategory] = useState(taskFilters.category);

  // Sort and Filter Tasks
  const filterTasks = function(tasks, filters) {
    // Function globals
    const unfilteredTasks = [...tasks];
    let tasksInCategory;
    let sortedFilteredTasks;
    let tasksCloserThan;
    let tasksInCity;
    let filteredByDate;
    let distance;

    // Filters
    // Set distance filter
    if (filters.distance === 'all') {
      distance = Infinity;
    } else {
      distance = parseInt(filters.distance);
    }

    // Filter by distance
    tasksCloserThan = [...unfilteredTasks].filter(task => task.distance <= distance);

    // Search and filter by city
    if (filters.city === '') {
      tasksInCity = tasksCloserThan;
    } else {
      tasksInCity = tasksCloserThan.filter(task => task.address.city.toLowerCase().includes(filters.city.toLowerCase()));
    }

    // Filter by category
    if (filters.category === 'All Categories') {
      tasksInCategory = tasksInCity;
    } else {
      tasksInCategory = tasksInCity.filter(task => task.category === filters.category);
    }

    // Filter by date
    if (!filters.date) {
      filteredByDate = tasksInCategory;
    } else {
      filteredByDate = tasksInCategory.filter(task => new Date(task.startDate).toISOString().substring(0, 10) === filters.date);
    }
    // Sort by distance or date
    if (filters.sort === 'Distance') {
      sortedFilteredTasks = sortTasksByDistance(filteredByDate);
    } else {
      sortedFilteredTasks = sortTasksByStartTime(filteredByDate);
    }

    // Update state -> fire render of filtered tasks
    setFilteredTasks(sortedFilteredTasks);
  };

  // Display view by list or map
  const currentView = (view === "List" ?
    <section className='flex flex-col p-2 mx-2 overflow-hidden'>
      <TaskList tasks={filteredTasks} userId={user.id} />
    </section> :
    <section className='flex flex-col p-2 overflow-hidden'>
      <Map tasks={filteredTasks} userId={user.id} />
    </section>
  );

  // Template
  return (
    <>
      <main className=''>
        <NavBar name={user.firstName}
          id={user.id} />
        <div className="flex w-[100%] justify-start ">
          <div className="">
            <Sidebar
              sidebarOptions={sidebarOptions}
              filterTasks={() => filterTasks(tasksToFilter, taskFilters)}
              filters={taskFilters}
              setFilters={setTaskFilters}
              setCategory={setCategory}
              distances={distances}
            />
          </div>
          <div className="w-[100%] p-2">
            <PageHeader setView={setView} city={user.address.city} category={category} />
            {currentView}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Server-side data fetching
export const getServerSideProps = async function() {

  return {
    props: {
      tasks: sortedTasks,
      user: loggedInUser
    }
  };
  /*
  // Capture tasks with addresses:
  const tasks = await prisma.task.findMany({
    where: {
      status: "OPEN"
    },
    include: {
      address: true
    },
    orderBy: {
      startDate: 'desc'
    }
  });

  // Define current user
  const userFetch = await prisma.user.findMany({
    where: {
      id: 1
    },
    include: {
      address: true
    }
  });
  const user = userFetch[0];

  // Add distance between user and task to tasks, order by ascending start time
  addDistanceToTasks(tasks, user);
  const sortedTasks = sortTasksByStartTime(tasks);

  return {
    props: {
      tasks: JSON.parse(JSON.stringify(sortedTasks)),
      user: JSON.parse(JSON.stringify(user))
    }
  };
  */
};