import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signup } from "../jsModules/firebase/auth";
export default function SignUp() {
  console.log("administration/SignUp.js || Signup.js");
  const [error, setError] = useState([null]);
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email + " " + password);
    setError("");
    try {
      await signup(email, password);
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
          Sign Up to <Link to="/"> Skatteguiden</Link>
        </h1>
        <p>Fill in the form below to create an account.</p>
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
          <button type="submit">Sign up</button>
        </div>
        <hr></hr>
        <p>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
