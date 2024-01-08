import { useState } from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/home';
import About from './src/pages/about';
import Register from './src/pages/register';
import Display from './src/pages/display';
import Login from './src/pages/login';
import ProductList from './src/productPages/productList';
import CreateProduct from './src/productPages/Create';


function App() {

    axios.get('https://mern-server-khaki.vercel.app/')
    .then(result => console.log(result))
    .catch(err => console.log(err))

  return (
    
    <>
    
     <div>
     <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
        <Route path='/login' element={<Login/>}></Route>


        <Route path='/product-list' element={<ProductList/>}></Route>
        <Route path='/create' element={<CreateProduct/>}></Route>

        
      </Routes>
      </BrowserRouter>
     </div>


     <h2>Hello World</h2>
</>   
  )
}
export default App
