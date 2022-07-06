import React from 'react'
import "../CSS/style.css"
import Navbar from './Navbar'

export default function Home() {
  
  return (
    <>
      <div className="container">
        <Navbar/>
        <div className="main-container">
            <div className="main-heading">
                <h1>Build Your Digital Transformation Project Team Using <span className='main-span'>TaaS</span> </h1>
            </div>
            <div>
                <a href='#select' className='main-btn grad'>Get Started</a>
            </div>
         </div>
      </div>
    </>
  )
}
