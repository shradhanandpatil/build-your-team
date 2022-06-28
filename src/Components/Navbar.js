import React from 'react'
import "../CSS/style.css"
import NimapLogo from "../img/nimapLogo (1).png"

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nimap-logo">
            <img src={NimapLogo} alt="" />
        </div>
        <div className="link-container">
            <ul className='link'>
                <li className='link1'><a href="https://nimapinfotech.com/about-us/" target='_b'>About Nimap</a></li>
                <li className='link2'><a href="#contactUs">Contact Us</a></li>
            </ul>
        </div>
      </div>
    </>
  )
}
