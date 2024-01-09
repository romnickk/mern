import React from "react";
import { useNavigate } from "react-router-dom";

const About = ()=>{
const navigate = useNavigate();

return (
    <div>
        <h2>About Page</h2>
        <button onClick={() =>{navigate('https://mern-server-khaki.vercel.app/api/home')}}>Home</button>
    </div>

)

}

export default About