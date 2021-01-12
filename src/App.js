import "firebase/auth";

/* needed */
import "./sass/scss/reset.scss";
import "./sass/scss/menu.scss";
import "./sass/scss/login.scss";
import "./sass/scss/newUserForm.scss";
import "./sass/scss/viewProfile.scss";
import "./sass/scss/chat.scss";
import "./sass/scss/filterUsers.scss";
import "./sass/scss/deleteModal.scss";
import "./sass/main.scss";
import "./sass/scss/adminOverview.scss";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./jsModules/firebase/auth";
import Login from "./components/login/Login";
import PrivateRoute from "./components/login/PrivateRoute";
import SignUp from "./components/login/SignUp";
import Administration from "./components/Index.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#838383",
    },
    secondary: {
      light: "#0066ff",
      main: "#384D62",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  overrides: {
    MuiInputBase: {
      input: {
        "&:-webkit-autofill": {
          transitionDelay: "9999s",
          transitionProperty: "background-color, color",
          backgroundColor: "transparent",
        },
      },
      root: {
        "&:-selected": {
          backgroundColor: "white",
          color: "white",
        },
      },
    },
  },
});

export default function App() {
  // console.log("App.js || App() |");

  window.addEventListener("resize", function (event) {
    if (window.innerWidth > 1000 && window.innerWidth < 1050) {
      window.location.reload();
    }
  });

  return (
    <section className="App">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <HashRouter>
            <Switch>
              <PrivateRoute exact path="/administration" component={Administration} />
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/" component={Login}></Route>
            </Switch>
          </HashRouter>
        </AuthProvider>
      </ThemeProvider>
    </section>
  );
}
