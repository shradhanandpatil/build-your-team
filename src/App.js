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
                fallback={<div className="lazyLoading">Please Wait......</div>}
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
                fallback={<div className="lazyLoading">please wait.....</div>}
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
