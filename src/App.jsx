import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div className=' w-full block'>

        {/* <Header /> */}
        <ToastContainer />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
  )
}

export default App
