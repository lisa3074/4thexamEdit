import { firebaseConfig } from "../../jsModules/firebase/firebase";
import { AuthContext } from "../../jsModules/firebase/auth";
import React, { useCallback, useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import Grid from "@material-ui/core/Grid";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LockIcon from "@material-ui/icons/Lock";
import TextField from "@material-ui/core/TextField";
import Question from "./Question";

const Login = ({ history }) => {
  console.log("login || Login.js | Login()");
  const [error, setError] = useState([null]);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/administration");
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
    return <Redirect to="/administration" />;
  }

  function questionClicked() {
    document.querySelector(".Question").classList.toggle("hide");
  }

  const handleEmail = (e) => {
    localStorage.setItem("email", e.target.value);
  };
  // console.log(localStorage);

  return (
    <main className="login-wrapper">
      <div className="login">
        <div className="signin-icon">
          <LockIcon />
        </div>
        <h2>Sign in</h2>
        <form onSubmit={handleLogin}>
          <div className="login-inputs">
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AlternateEmailOutlinedIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="email"
                  label="Email"
                  className="email"
                  name="email"
                  type="email"
                  onChange={handleEmail}
                />
              </Grid>
            </Grid>
          </div>
          <div className="login-inputs">
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <VpnKeyIcon />
              </Grid>
              <Grid item>
                <TextField id="password" label="Password" className="password" name="password" type="password" />
              </Grid>
            </Grid>
          </div>

          {error ? <p className="error">{error}</p> : null}
          <div className="button-wrapper">
            <button className="loginButton text-btn btn" type="submit">
              Sign in
            </button>
          </div>
        </form>

        <div className="question-icon" onClick={questionClicked}>
          <h3>?</h3>
        </div>
        <Question />
      </div>
    </main>
  );
};

export default withRouter(Login);
