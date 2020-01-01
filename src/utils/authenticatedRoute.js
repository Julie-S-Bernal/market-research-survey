import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthenticationContext } from '../Authentication';

const AuthenticatedRoute = ({ component: RouteComponent, ...rest }) => {
  const {user} = useContext(AuthenticationContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  );
};


export default AuthenticatedRoute
