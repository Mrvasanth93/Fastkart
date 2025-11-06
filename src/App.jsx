import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import HelpCenter from './Compononts/Helpcenter'
import Nav1 from './Compononts/nav/Nav1'
import Login from './Compononts/auth/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './Compononts/auth/Register'
import Footer from './Compononts/Footer'
import Nav2 from './Compononts/nav/Nav2'
import Home from "./Pages/home/Home"
import Fashion from './Pages/Fashion/Fashion'
import Electronics from './Pages/Electronics/Electronics'
import Bags from './Pages/Bags/Bags'
import Beauty from './Pages/Beauty/Beauty'
import FootWear from './Pages/Footewear/Footewear'
import Jwells from './Pages/Jwelles/Jwelles'
import Wellness from './Pages/Wellness/Wellness'
import ProductView from './Compononts/ProductView'
import Nav3 from './Compononts/nav/Nav3'
import CreateProduct from './Pages/Product/CreateProduct'

function App() {
  return (
    <>
      <HelpCenter/>
      <Nav1/>
      <Nav2/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/bags' element={<Bags/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/wellness' element={<Wellness/>}/>
        <Route path='/jwells' element={<Jwells/>}/>
        <Route path='/footwear' element={<FootWear/>}/>
        <Route path='/admin/products/create' element={<CreateProduct/>}/>
        <Route path=":path/product/:productid" element={<ProductView/>}/>
      </Routes>
      <Footer/>
      <Nav3/>
    </>
  )
}

export default App
