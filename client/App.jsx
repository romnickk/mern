import { useState } from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/home';
import About from './src/pages/about';
import Register from './src/pages/register';
import Display from './src/pages/display';
import Login from './src/pages/login';
import ProductList from './src/productPages/productList';
import CreateProduct from './src/productPages/Create';
import style from './src/css/register.module.css'

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

     <div className={style.container}>
      <form onSubmit={handleSubmit}>
      <h2 className={style.title}>Register</h2>

      {message && <p className={style.message}>{message}</p>}

      <div className='mb-3'>
        <label htmlFor="name">
        <strong>Name:</strong>
        </label>
        <input type="text" name="name" id="name" autoComplete='off' placeholder='enter your name' className='form-control rounded-0' onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className='mb-3'>
      <label htmlFor="username">
      <strong>Username:</strong>
      </label>
      <input type="text" name="username" id="username" autoComplete='off' placeholder='enter your username' className='form-control rounded-0' onChange={(e) => serUsername(e.target.value)} />
    </div>

    <div className='mb-3'>
    <label htmlFor="password">
    <strong>Password:</strong>
    </label>
    <input type="text" name="password" id="password" autoComplete='off' placeholder='enter your password' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <button type='submit' className={style.register}>Register</button>
  <p>Already have an account? <Link to="/login">Login</Link></p>

  </form>
  </div>
     <h2>Hello World</h2>
</>   
  )
}
export default App
