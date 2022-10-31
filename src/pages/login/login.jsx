import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
//import styled from 'styled-components'
//import {Button} from './login.styled'
// import { CustomCard } from '../../components/card';

import {
  CardSmallWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardButton,
  ErrorMessage,
} from "../../components/card/index";

const Login = ({ onLogin }) => {
  useEffect(() => {
    fetch("http://localhost:3002/interviewer")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const errorMessages = {
    invalidEmail: "Please enter mycompany id",
    invalidUser: "User not found",
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const user = users.find((user) => user.email === email);
    if (regex.test(email) && !email.includes("mycompany.com")) {
      setErrorMessage(errorMessages.invalidEmail);
    } else if (!user) {
      setErrorMessage(errorMessages.invalidUser);
    } else {
      const url = ""; //in future to be added
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      };
      fetch(url, requestOptions).then((response) => response.json());

      const user = users.find((user) => user.email === email);
      console.log("user:", user);
      setErrorMessage("");
      onLogin(user);
      navigate(`/`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSmallWrapper>
        <CardHeader>
          <CardHeading>Log in</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <label htmlFor="email">Email address</label>
            <CardInput
              placeholder="Enter Email"
              type="email"
              id="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </CardFieldset>

          <CardFieldset>
            <label htmlFor="password">Password</label>
            <CardInput
              placeholder="Enter Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>

          <CardFieldset>
            <CardButton type="submit">Log in</CardButton>
          </CardFieldset>
        </CardBody>
      </CardSmallWrapper>
    </form>
  );
};

export default Login;
