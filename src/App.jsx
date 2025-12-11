import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Login from './pages/Login'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/prodotti'>
              <Route path='' element={<Products />} />
              <Route path=':id' element={<SingleProduct />} />
            </Route>
            <Route path='/contatti' element={<Contacts />} />
            <Route path='/chi-siamo' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
