import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Routing from './utilities/Routing';
import Navbar from './components/Navbar';

const App = () => {

  const notify = () => toast('Here is your toast.');


  return (
    <>
      <div className='font-jetbrains'>
        <Navbar />
        <Routing />
        <Toaster />
      </div>
    </>
  )
}

export default App
