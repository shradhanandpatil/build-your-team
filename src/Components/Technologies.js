import React, { useState } from 'react'
import GetQuote from './GetQuote';
import Home from './Home';

export default function Technologies() {
  const [ form , setForm]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
 
  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setForm(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setForm(false);   
  };

  return (
    <>{
      form ?'' : <Home/>
    }
         {isOpen && <GetQuote 
            closeModal={closeModal}
            form={form}
            isOpen={isOpen}
         />}
      <div className="tech-container">
        <div className="md-heading">
            <h2>Select Technologies</h2>
        </div>
        <div className="md-btn">
          <button className='grad' onClick={openModal}>Get Quote</button>
        </div>
      </div>
    </>
  )
}
