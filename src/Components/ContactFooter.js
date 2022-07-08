import React from 'react'
import '../CSS/style.css'

export default function ContactFooter() {
  return (
    <>
    <div className="footer grad" id='contactUs'>
            <div className="footer-container">
                <div className="mumbai-container box">
                    <h2>CONTACT</h2>
                    <p>Mumbai | Headquarter</p>
                    <p>Todi Industrial Estate,A Wing 41, 4th floar Sunmill Compound , Lower Parel-West Mumbai, Pincode-4000013</p>
                </div>
                <div className="pune-container box">
                    <br />
                    <p>Pune | Branch Office</p>
                    <p>Teerth2Work,1st floor , Teerth Technospace, Bengaluru-Mumbai Hwy, Baner, Pune, Maharashtra 411045</p>
                </div>
                <div className="banglore-container box">
                    <br />
                    <p>Banglore | Branch Office </p>
                    <p>4th Floor , No 22,Salarpuria Towers-I Industrial Layout, Hosur Rd, 7th Block, Koramangala, Bengaluru, Karnataka 560095</p>
                </div>
            </div>
    </div>
    </>
  )
}
