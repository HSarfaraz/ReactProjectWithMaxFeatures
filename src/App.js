import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import ConductInterview from "./pages/conduct-interview";
import Dashboard from "./pages/dashbaord";
import Details from "./pages/details";
import Login from "./pages/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/index";
import Theme from "./theme";
import Navbar from "./components/navbar";
//import styled from "styled-components";

const App = () => {
  const [user, setUser] = useState();

  const handleOnLogin = (interviewee) => {
    setUser(interviewee);
  };
  const handleOnLogout = () => {
    // setUser({});
    setUser(null);
  };

  return (
    <Theme>
      <div className="App">
        <Router>
          <Navbar user={user} onLogout={handleOnLogout} />
          <Routes>
            <Route path="/login" element={<Login onLogin={handleOnLogin} />} />
            <Route path="/details/:id" element={<Details user={user} />} />
            {/* <Route path="/interviews/:id" element={ <Details />} />  */}
            <Route path="/conduct-interview" element={<ConductInterview />} />
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/"
              element={!user ? <Navigate replace to="/login" /> : <Dashboard />}
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Theme>
  );
};

export default App;
