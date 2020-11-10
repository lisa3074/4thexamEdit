import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../jsModules/firebase/auth";

const PrivateRoute = ({ component: Component, credentials, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !!currentUser ? <Component credentials={credentials} {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default PrivateRoute;
