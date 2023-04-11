import Head from 'next/head'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import TaskForm from '@/components/TaskForm'
import { useState } from 'react'


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
    postcode: ""
  })
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[100vh-40px]">
        <NavBar />
        <div className="flex justify-center">
        <TaskForm formData={formData} setFormData={setFormData}/>
        </div>
      </main>

      <Footer/>
    </>
  )
}