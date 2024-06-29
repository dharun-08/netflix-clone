import React from 'react'
import './ScrollToTop.css'
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [isVisible, setVisible] = useState(true);
    const toggleVisibility = () => {
        if(window.scrollY > 300) {
            setVisible(true)
        }else{
            setVisible(false)
        }
    }
    const scrollToTop = () =>{
        window.scrollTo(
            {top:0,behavior:"smooth"}
        )
    }
    useEffect(()=>{
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.addEventListener("scroll", toggleVisibility);
        }
    },[])
  return (
    <div className='scroll-to-top'>
        {isVisible && (
            <div onClick={scrollToTop}>
                <i className='fas fa-arrow-circle-up fa-3x'></i>
            </div>
        )}
    </div>
  )
}

export default ScrollToTop