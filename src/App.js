import "firebase/auth";

/* needed */
import "./sass/scss/reset.scss";
import "./sass/scss/menu.scss";
import "./sass/scss/login.scss";
import "./sass/scss/newUserForm.scss";
import "./sass/scss/viewProfile.scss";
import "./sass/main.scss";
import "./sass/scss/adminOverview.scss";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "./jsModules/firebase/auth";
import Login from "./components/login/Login";
import PrivateRoute from "./components/login/PrivateRoute";
import SignUp from "./components/login/SignUp";
import Administration from "./components/administration/overview/Administration";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//Change upper to lower when ready for production build.
//import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#38C29E",
    },
    secondary: {
      light: "#0066ff",
      main: "#384D62",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default function App() {
  console.log("App");

  const Credentials = {
    email: "",
    password: "",
  };
  const [credentials, setCredentials] = useState([]);
  const credentialsObject = Object.create(Credentials);

  const saveCredentials = () => {
    credentialsObject.email = document.querySelector(".email").value;
    credentialsObject.password = document.querySelector(".password").value;
    setCredentials(credentialsObject);
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" credentials={credentials} component={Administration} />
            <PrivateRoute exact path="/administration" credentials={credentials} component={Administration} />
            <Route exact path="/signup" component={() => <SignUp saveCredentials={saveCredentials} />}></Route>
            <Route exact path="/login" component={() => <Login saveCredentials={saveCredentials} />}></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

//Call all that only admin shoud see for className="private" and className"board" for only boardmembers
//and className="regular" for regular users (only the things the others shouldn't see)
