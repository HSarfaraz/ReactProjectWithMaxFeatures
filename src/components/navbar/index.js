import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/images/hire-buddy-logo.png";
import { LinkStyle } from "./navbar.styled";

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
    navigate(`/login`);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-default border">
        <div className="container-fluid">
          <NavLink
            exact
            activeClassName="active"
            className="navbar-brand w-10 p-2 bg-white rounded-pill"
            to="/"
          >
            <img src={logo} alt="logo" className="w-100" />
          </NavLink>
          <button
            aria-label="toggle button"
            title="toggle button"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#hbnavbar"
          >
            <span aria-hidden="true" className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="hbnavbar">
            {user && (
              <ul className="navbar-nav me-auto">
                {/* <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link " to="/">Dashboard</NavLink>
                    </li> */}
                {/* <li className="nav-item">
                        <NavLink activeClassName="active" className="btn btn-danger" to="/conduct-interview">Conduct an interview</NavLink>
                    </li> */}
                {/* <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/details">Interview Details</NavLink>
                    </li> */}
              </ul>
            )}

            <div className="d-flex ms-auto flex-nowrap">
              <ul className="navbar-nav ">
                {user ? (
                  <>
                    <li className="nav-item mx-4">
                      <NavLink
                        activeClassName="active"
                        className="btn btn-danger-custom"
                        to="/conduct-interview"
                      >
                        <LinkStyle>Conduct an interview</LinkStyle>
                      </NavLink>
                    </li>
                    <li className="nav-item pt-2">
                      <span className="welcome">
                        Welcome, <b>{user.name}</b>!
                      </span>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="navbarDropdown"
                        aria-label="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i
                          className="fa fa-user-circle-o fa-lg"
                          aria-hidden="true"
                        ></i>
                      </NavLink>
                      <ul
                        className="dropdown-menu dropdown-menu-end p-0"
                        aria-labelledby="navbarDropdown"
                      >
                        <li className="dropdown-item1">
                          <NavLink
                            activeClassName="active"
                            className="nav-link btn btn-danger-custom"
                            to="/login"
                            onClick={handleLogout}
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="active"
                        className="nav-link btn btn-danger-custom"
                        to="/login"
                      >
                        <LinkStyle>Login</LinkStyle>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
