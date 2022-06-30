import React from "react";
import Technologies from "./Components/Technologies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Technologies/>} />
        <Route exact path="/contactus" element={<ContactUs/>}/> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
