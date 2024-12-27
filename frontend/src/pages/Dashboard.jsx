import React from 'react'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>

      <div className='mt-10 ml-10 font-semibold text-2xl'>
        <h1 className='mt-5 bg-red-500 w-44 cursor-pointer h-10 flex items-center justify-center rounded-2xl text-sm'>Enrolled Courses</h1>
      </div>


      <div className='flex'>
        <div className='bg-zinc-800 h-64 w-64 rounded-3xl ml-10 mt-5'></div>
        <div className='bg-zinc-800 h-64 w-64 rounded-3xl ml-10 mt-5'></div>
        <div className='bg-zinc-800 h-64 w-64 rounded-3xl ml-10 mt-5'></div>
        <div className='bg-zinc-800 h-64 w-96 rounded-3xl ml-24 mt-5'>
          <h1 className='m-5 text-base'>Recent Updates</h1>
          <div className='h-10 w-80 bg-zinc-700 m-5 rounded-xl'></div>
          <div className='h-10 w-80 bg-zinc-700 m-5 rounded-xl'></div>
          <div className='h-10 w-80 bg-zinc-700 m-5 rounded-xl'></div>
        </div>
      </div>

      <div className='flex'>
        <div className='bg-zinc-800 h-96 w-3/5 rounded-3xl ml-10 mt-10'>
        <h1 className='m-5 text-base'>Current Progress</h1>
        <div className='h-10 w-auto bg-zinc-700 m-5 rounded-xl'></div>
        <div className='h-10 w-auto bg-zinc-700 m-5 rounded-xl'></div>
        <div className='h-10 w-auto bg-zinc-700 m-5 rounded-xl'></div>
        <div className='h-10 w-auto bg-zinc-700 m-5 rounded-xl'></div>
        <div className='h-10 w-auto bg-zinc-700 m-5 rounded-xl'></div>
        </div>
        <div className='bg-zinc-800 h-96 w-96 rounded-3xl ml-20 mt-10'></div>
      </div>
      



      <Footer />
    </>
  )
}

export default Dashboard
