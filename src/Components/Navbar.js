import React from 'react'
import "../CSS/style.css"
import NimapLogo from "../img/nimapLogo (1).png"

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <img src={NimapLogo} alt="" />
        </div>
        <div className="link-container">
            <ul className='link'>
                <li className='link1'><a href="/">About Nimap</a></li>
                <li className='link2'><a href="/">Contact Us</a></li>
            </ul>
        </div>
      </div>
    </>
  )
}
