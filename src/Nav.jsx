import React, { useState,useEffect } from 'react';
import './Nav.css';

const Nav = () => {

    const[Show,SetHandleShow] = useState(false);

    const transitionNavbar = () =>{
        if(window.scrollY > 100) {
            SetHandleShow(true);
        }
        else{
            SetHandleShow(false)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll",transitionNavbar)
    
      return () => {
        window.removeEventListener("scroll",transitionNavbar)
      }
    }, [])
    

  return (
    <div className={`Nav ${Show && "Nav__Black"}`}>

        <div className="Nav__content">
        <img className='Nav__logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <img className='Nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>

    </div>
  )
}

export default Nav;