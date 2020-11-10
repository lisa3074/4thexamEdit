import React, { useCallback, useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { firebaseConfig } from "../jsModules/firebase/firebase";
import { AuthContext } from "../jsModules/firebase/auth";
import Grid from "@material-ui/core/Grid";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LockIcon from "@material-ui/icons/Lock";
import TextField from "@material-ui/core/TextField";

const Login = ({ history }) => {
  const [error, setError] = useState([null]);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
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
                <TextField id="email" label="Email" className="email" name="email" type="email" />
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

          {error ? <p>{error}</p> : null}
          <div className="button-wrapper">
            <button className="loginButton text-btn btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default withRouter(Login);
