import React,{Fragment}from "react";
import Home from "./components/home"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
    <Router>
      <Fragment>
      <Routes>
       <Route exact path="/"element={<Home/>}>
       </Route>
      </Routes>
      </Fragment>
    </Router>
  </div>
  );
}

export default App;
