import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components';
import { login } from './store/authslice';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  const data = JSON.parse(localStorage.getItem('user'))
  if(data){
    dispatch(login(data))
  }

  return (
    <div className=' bg-common w-full block min-h-screen text-common'>

        <ToastContainer />
        <Header />
        <main className='pt-10'>
          {/* <Sidebar /> */}
          <Outlet />
        </main>
        <Footer />
      </div>
  )
}

export default App
