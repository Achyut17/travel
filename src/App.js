import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Hero from './Components/Hero/Hero'
import Main from './Components/Main/Main'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import SignUp from './Components/SignUp/SignUp'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/packages' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<SignUp/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App