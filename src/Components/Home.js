import React from 'react'
import "../CSS/style.css"
import home from "../img/Vector Image.svg"

export default function Home() {
  return (
    <>
      <div className="container">
      <img className='myImg' src={home} alt="" /> 
        <div className="main-container">
            <div className="main-heading">
                <h1>Build Your Digital Transformation Project Team Using <span className='main-span'>TaaS</span> </h1>
            </div>
            <div>
                <button className='main-btn grad'>Get Started</button>
            </div>
        </div>
      </div>
    </>
  )
}
