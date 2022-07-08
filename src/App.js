import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Protected from "./Router/Protected";
const ContactUs = lazy(() => import("./Components/ContactUs"));
const Teachnologies = lazy(() => import("./Components/Technologies"));

function App() {
  localStorage.clear();
  return (
    <div className="parent_conatiner">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense
                fallback={<div style={{position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  fontSize: "2rem",
                  fontWeight: "600"}}>Please Wait......</div>}
              >
                <Teachnologies />
              </Suspense>
            }
          />
          <Route
            exact
            path="/contactus"
            element={
              <Suspense
                fallback={<div style={{position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                fontSize: "2rem",
                fontWeight: "600"}}>please wait.....</div>}
              >
                <Protected Component={ContactUs} />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
