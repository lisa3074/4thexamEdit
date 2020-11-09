import "firebase/auth";

/* needed */
import "./sass/main.scss";
import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import PrivateRoute from "./components/login/PrivateRoute";
import SignUp from "./components/login/SignUp";
import Administration from "./components/administration/Administration";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "./components/jsModules/firebase/auth";

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
    // console.log(credentialsObject);
    setCredentials(credentialsObject);
  };

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" credentials={credentials} component={Administration} />
          <Route exact path="/signup" component={() => <SignUp saveCredentials={saveCredentials} />}></Route>
          <Route exact path="/login" component={() => <Login saveCredentials={saveCredentials} />}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
