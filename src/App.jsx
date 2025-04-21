import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Loginpage from './pages/Loginpage'
import Footer from './components/Footer'
import SignupPage from './pages/SignupPage'
import Forgetpage from './pages/Forgetpage'
import MailotpPage from './pages/MailotpPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import ProductviewPage from './pages/ProductviewPage'
import CartPage from './pages/CartPage'
import LandingPage from './pages/LandingPage'




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
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/product/:id' element={<ProductviewPage/>}/>
          <Route path='/cart'element={<CartPage/>}/>
          <Route path='/landingpage' element={<LandingPage/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App