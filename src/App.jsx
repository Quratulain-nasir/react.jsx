import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import NavigationBar from './Components/NavigationBar'
import FooterSection from './Components/FooterSection'
import CategoryPage from './Pages/CategoryPage'
import ProductPage from './Pages/ProductPage'

export default function App() {

  const [user, setUser] = useState()
  return (
    <>

      <NavigationBar />

      {
        user

          ?
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productID" element={<ProductPage />} />
              <Route path="/products/category/:categoryName" element={<CategoryPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          )
          :
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="*" element={<Navigate to="/login" replace={true} />} /> */}
            </Routes>
          )

      }

      <FooterSection />


    </>
  )
}
