import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Loginpage from './pages/Loginpage'
import Footer from './components/Footer'
import SignupPage from './pages/SignupPage'
import Forgetpage from './pages/Forgetpage'
import MailotpPage from './pages/MailotpPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/forget' element={<Forgetpage/>}/>
          <Route path='/mailotp' element={<MailotpPage/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App