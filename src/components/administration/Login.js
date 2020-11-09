import React, { useState } from "react";
import { Link } from "react-router-dom";
import App from "../../App";
import { signin } from "../jsModules/firebase/auth";
export default function Login() {
  console.log("administration/Login.js || Login.js");
  const [error, setError] = useState([null]);
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email + " " + password);
    setError("");
    try {
      await signin(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  function handleChange(e) {
    e.target.type === "email" ? setEmail(e.target.value) : setPassword(e.target.value);
    console.log(email + " " + password);
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>
          Log in to <Link to="/"> Skatteguiden</Link>
        </h1>
        <p>Fill in the form below to log in.</p>
        <div>
          <input placeholder="Email" name="email" type="email" onChange={handleChange} value={email}></input>
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            type="password"></input>
        </div>
        <div>
          {error ? <p>{error}</p> : null}
          <button type="submit">Login</button>
        </div>
        <hr></hr>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
