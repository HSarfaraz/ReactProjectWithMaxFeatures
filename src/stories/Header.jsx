import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import "./header.css";
import logo from "../../src/assets/images/hire-buddy-logo.png";

// export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
export const Header = ({ user, onLogin, onLogout }) => (
  <header>
    <div className="wrapper">
      <img src={logo} alt="logo" className="w-10" />
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button primary size="small" onClick={onLogin} label="Log in" />
            {/* <Button size="small" onClick={onCreateAccount} label="Sign up" /> */}
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
