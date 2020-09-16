import React from "react";
import "./login.css";
import { Link, userHistory } from "react-router-dom";

function Login() {
  const login = (event) => {
    event.preventDefault();
  };
  const register = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
          <button onClick={login} className="login__signInButton">
            Sign-in
          </button>
        </form>
        <p>By signing-in you agree to Amazon's terms and conditions</p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
