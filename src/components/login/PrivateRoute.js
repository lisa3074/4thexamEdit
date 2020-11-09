import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../jsModules/firebase/auth";

const PrivateRoute = ({ component: RouteComponent, credentials, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? <RouteComponent credentials={credentials} {...routeProps} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default PrivateRoute;
