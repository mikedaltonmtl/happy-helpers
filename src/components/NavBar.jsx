//////////////////////
// NavBar Component
//////////////////////

// Stylesheet

// Component
import Link from 'next/link';
import Button from '@/components/Button'

export default function NavBar(props) {

  // Template
  return (
    <div className="flex items-center p-5 text-teal-600 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 fixed sticky top-0 z-50 bg-neutral-100">
      <ul className="flex w-1/2">
        <li className='px-6 '>
          Happy Helpers
        </li>
        <li className='px-6 '>
          <Link href="/home">Home</Link>
        </li>
        <li className='px-6 '>
          <Link href="/new-task">New</Link>
        </li>
      </ul>
      <ul className="flex items-center  w-1/2 justify-end">
      <li className='px-6 '>
          <Link href="/user-tasks">MyHelp</Link>
        </li>
        <li className='px-6 '>
          <h2>Messages</h2>
        </li>
        <li className='px-6 '>
          <Link href="/my-profile/:id">{props.name}</Link>
        </li>
        <li className='px-6 '>
          <Button buttonName={"LOGOUT"}/>
        </li>
      </ul>
    </div>
  );
};