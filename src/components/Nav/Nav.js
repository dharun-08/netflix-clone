import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import NetFlixLogo from '../../images/NetFlixLogo.png'
import NetflixAvatar from '../../images/NetflixAvatar.png'

const Nav = () => {
    const [nav,setNav] = useState(false)
    const NavBarVisibility = () =>{
        if(window.scrollY > 100) {
            setNav(true)
        }else{
            setNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", NavBarVisibility);

        return () =>{
            window.removeEventListener("scroll", NavBarVisibility);
        }
    },[])
  return (
    <div className={`nav ${nav && "nav-black"}`}>
      <Link to="/">
        <img src={NetFlixLogo} className="nav-logo" alt="logo" />
      </Link>
      <img src={NetflixAvatar} className='nav-avatar' alt="avatar" />
    </div>
  );
}

export default Nav