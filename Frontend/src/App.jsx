import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Sign-up/Signup'
import Login from './Login/Login'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App