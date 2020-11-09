// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import React, { useEffect, useState } from "react";
import "./sass/main.scss";
import Login from "./components/administration/Login";
import SignUp from "./components/administration/SignUp";
import Administration from "./components/administration/Administration";
import { auth } from "./components/jsModules/firebase/firebase";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import "firebase/auth";

//import "firebase/firestore";

//If the user is not authenticated. Props passed:
//the component to render if condition is true
//The authenticated state
//The remaining props passed from the router
function PrivateRoute({ component: Component, authenticated, ...rest }) {
  console.log("privaterouter");
  return (
    <Route
      {...rest}
      //callback function
      render={(props) =>
        props.authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  console.log("publicrouter");
  return (
    <Route
      {...rest}
      //callback function
      render={(props) => (authenticated === false ? <Component {...props} /> : <Redirect to="/administration" />)}
    />
  );
}
export default function App() {
  console.log("App");
  const [authenticated, setAuth] = useState([false]);
  const [loading, setLoad] = useState([true]);

  useEffect(() => {
    console.log("useeffect");
    //onAuthStateChanged is a method from firebase
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
        setLoad(false);
      } else {
        setAuth(false);
        setLoad(false);
      }
    });
  }, []);
  console.log(authenticated);
  return loading === true ? (
    <h2>Loading...</h2>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/administration" authenticated={authenticated} component={Administration}></Route>
        <Route exact path="/signup" authenticated={authenticated} component={SignUp}></Route>
        <Route exact path="/login" authenticated={authenticated} component={Login}></Route>
        {/*  <PrivateRoute path="/administration" authenticated={authenticated} component={Administration}></PrivateRoute>
        <PublicRoute path="/signup" authenticated={authenticated} component={SignUp}></PublicRoute>
        <PublicRoute path="/login" authenticated={authenticated} component={Login}></PublicRoute> */}
      </Switch>
    </Router>
  );
}
