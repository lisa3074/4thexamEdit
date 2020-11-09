import React, { useCallback, useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { firebaseConfig } from "../jsModules/firebase/firebase";
import { AuthContext } from "../jsModules/firebase/auth";

const Login = ({ history, saveCredentials }) => {
  const [error, setError] = useState([null]);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      saveCredentials();
      const { email, password } = e.target.elements;
      try {
        await firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        error.message === "The password is invalid or the user does not have a password."
          ? setError("Either the user does not exist or the password does not match user")
          : setError(error.message);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h1>
          Log in to <Link to="/"> Skatteguiden</Link>
        </h1>
        <p>Fill in the form below to log in.</p>
        <label>
          Email
          <input className="email" name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input className="password" name="password" type="password" placeholder="Password" />
        </label>

        <div>
          {error ? <p>{error}</p> : null}
          <button className="loginButton" type="submit">
            Log in
          </button>
        </div>
        <hr></hr>
        <p>
          Don't have an account? If you work at Skatteguiden you can <Link to="/signup">Sign up</Link> here.
        </p>
      </form>
    </div>
  );
};

export default withRouter(Login);
