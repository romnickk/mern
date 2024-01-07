import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Register from './pages/register';
import Display from './pages/display';
import Login from './pages/login';
import ProductList from './productPages/productList';
import CreateProduct from './productPages/create';


function App() {

  return (
    
    <>
    
     <div>
     <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
        <Route path='/login' element={<Login/>}></Route>


        <Route path='/product-list' element={<ProductList/>}></Route>
        <Route path='/create' element={<CreateProduct/>}></Route>

        
      </Routes>
      </BrowserRouter>
     </div>
</>   
  )
}
export default App
