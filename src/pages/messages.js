import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';


import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
// import prisma from '../../prisma/.db';
import { loggedInUser } from '../../mock-data/users';


const ChatEngine = dynamic(() =>
  import('react-chat-engine').then(module => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then(module => module.MessageFormSocial)
);

export default function Chat3({ user }) {

  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  if (!showChat) {
    return <div></div>;
  }

  return (
    <>
      <main className='flex flex-col '>
        <NavBar name={user.firstName} id={user.id} />
        <div className='chat-height px-10 flex flex-col'>
          <ChatEngine
            height='calc(100vh - 200px)'
            projectID='e7f12e41-d0d6-4017-90ab-96405f9f8f67'
            userName='Anderson'
            userSecret='alligator'
            renderNewMessageForm={() => <MessageFormSocial />}
            offset={-4}
          />
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
};