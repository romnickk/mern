import { useState } from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/home';
import About from './src/pages/about';
// import Register from './src/pages/register';
import Display from './src/pages/display';
import Login from './src/pages/login';
import ProductList from './src/productPages/productList';
import CreateProduct from './src/productPages/Create';
import style from './src/css/register.module.css';
import { Link } from 'react-router-dom';

function App() {

  const [name , setName] = useState();
  const [username , serUsername] = useState();
  const [password , setPassword] = useState();

  const [message, setMessage] = useState('');

  const checkUser = async () =>{
    try {
      const response = await axios.post('https://mern-server-khaki.vercel.app/', {name,username,password})

      if(response.data.userExists){
       setMessage('username already exist')
      }else{
       setMessage('register successfully')
      }
     } catch (error) {
       console.log(error)
     }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    checkUser();
    

    
  }
  return (
    
    <>
    
     <div>
     <BrowserRouter>
      <Routes>
        <Route path='/api/home' element={<Home/>}></Route>
        <Route path='/api/about' element={<About/>}></Route>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
        <Route path='/api/login' element={<Login/>}></Route>


        <Route path='/api/product-list' element={<ProductList/>}></Route>
        <Route path='/api/create' element={<CreateProduct/>}></Route>

        
      </Routes>
      </BrowserRouter>
     </div>
     <h2>Hello World</h2>
</>   
  )
}
export default App
