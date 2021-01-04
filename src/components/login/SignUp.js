import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { firebaseConfig } from "../../jsModules/firebase/firebase";

const SignUp = ({ history, saveCredentials }) => {
  //console.log("login || SignUp.js | SignUp()");
  const [error, setError] = useState([null]);
  const handleSignUp = useCallback(
    async (e) => {
      console.log("LOAD");
      e.preventDefault();
      saveCredentials();
      const { email, password } = e.target.elements;
      try {
        await firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        setError(error.message);
      }
    },
    [history, saveCredentials]
  );

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h1>
          Sign up on <Link to="/"> Skatteguiden</Link>
        </h1>
        <p>Fill in the form below to log in.</p>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" className="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" className="password" />
        </label>

        <div>
          {error ? <p>{error}</p> : null}
          <button type="submit">Sign up</button>
        </div>
        <hr></hr>
        <p>
          Already got an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
