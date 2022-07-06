import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './login.css'
const Login = () => {
    const [credentials,setCredentials]=useState({
        username:undefined,
        password:undefined
    })

    const {loading,error,dispatch}=useContext(AuthContext);
    const navigate=useNavigate();


    const handleChange=(e)=>{
     setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
    }
  const handleClick= async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
     const response=await axios.post("http://localhost:8800/api/auth/login/",credentials)
     dispatch({type:"LOGIN_SUCCESS",payload:response.data})
     navigate("/");
    }catch(error){
        dispatch({type:"LOGIN_FAILURE",payload:error.response.data})
    }
  }
 
  return (
    <div className='login'>
        <div className="lContainer">
            <input type="text" placeholder='username' className="lInput" id="username" onChange={handleChange}/>
            <input type="password" placeholder='password' className="lInput" id="password" onChange={handleChange}/>
        <button className='lButton' disabled={loading} onClick={handleClick}>Login</button>
        {error && <sapn style={{color:'red'}}>{error.message}</sapn>}
        </div>
    </div>
  )
}

export default Login