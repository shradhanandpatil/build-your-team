import React from "react";
import Technologies from "./Components/Technologies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <>
    <Router>
      <Technologies/>
      <Routes>
        <Route path="/contacus" element={ContactUs}>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
