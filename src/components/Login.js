import React from "react";
import { Link } from "react-router-dom";
import Button from "./utilities/Button";
import "./Login.css";
import Input from "./utilities/Input";

function Login() {
  return (
    <div className="loginpage w3-container">
      <form>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3771/3771278.png"
          alt="Logo"
        />
        <h3>MathsEasy</h3>
        <p className="w3-margin-bottom">
          Please provide details below to login.
        </p>

        <Input
          claxx="lipusername w3-input w3-round w3-margin-bottom"
          typez="text"
          placeholder="Enter Username"
        />

        <Input
          claxx="lippassword w3-input w3-round w3-margin-bottom"
          typez="password"
          placeholder="Enter Password"
        />

        <Button
          text="Login"
          claxx="w3-button w3-theme w3-round-large w3-block w3-margin-bottom"
        />

        <Link
          to="/register"
          className="w3-button w3-theme-d4 w3-round-large w3-block w3-margin-bottom"
        >
          Register
        </Link>

        <Link to="/reset" className="w3-block w3-right-align">
          Forget password?
        </Link>
      </form>
    </div>
  );
}

export default Login;
