import React from "react";
import { Link } from "react-router-dom";
import Button from "./utilities/Button";
import "./Register.css";
import Input from "./utilities/Input";

function Register() {
  return (
    <div className="regpage w3-container">
      <form>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3771/3771278.png"
          alt="Logo"
        />
        <h3>MathsEasy</h3>
        <p className="w3-margin-bottom">
          Please provide details below to register.
        </p>
        <Input
          typez="text"
          claxx=" regfirstname w3-input w3-round w3-margin-bottom"
          placeholder="Enter First Name"
        />

        <Input
          typez="text"
          claxx=" reglastname w3-input w3-round w3-margin-bottom"
          placeholder="Enter Last name"
        />

        <Input
          typez="text"
          claxx=" regusername w3-input w3-round w3-margin-bottom"
          placeholder="Enter Username"
        />
        <Input
          claxx="regemail w3-input w3-round w3-margin-bottom"
          typez="email"
          placeholder="Enter Email"
        />

        <Input
          claxx="regphoneno w3-input w3-round w3-margin-bottom"
          typez="number"
          placeholder="Enter Phone No"
        />
        <Input
          typez="password"
          claxx="regpassword w3-input w3-round w3-margin-bottom"
          placeholder="Enter Password"
        />
        <Input
          typez="password"
          claxx="regpassword2 w3-input w3-round w3-margin-bottom"
          placeholder="Confirm Password"
        />
        <Button
          text="Register"
          claxx="w3-button w3-theme w3-round-large w3-block w3-margin-bottom"
        />

        <Link to="/" className="w3-block w3-right-align">
          Back
        </Link>
      </form>
    </div>
  );
}

export default Register;
