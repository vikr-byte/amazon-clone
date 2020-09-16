import React from "react";
import "./login.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user logged in
        //redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
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
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
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
