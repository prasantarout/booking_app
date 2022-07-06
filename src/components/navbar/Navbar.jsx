import React from 'react'
import './navbar.css'
import hotel from '../../images/hotelmade.png'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
const Navbar = () => {
  const {user}=React.useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className="navContainer">
        <Link to="/" style={{color:'inherit',textDecoration:'none'}}><span className="logo" style={{cursor:'pointer'}}>
           HOTELMADE
          </span>
          </Link>
        { user ?  user.username:(
         <div className="navITems">
              <button className="navBtn">Register</button>
              <button className="navBtn">Login</button>
          </div>  )}
        </div>
    </div>
  )
}

export default Navbar