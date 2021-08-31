import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../../../utils/AppContext.provider';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AppContext);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) => (state.logged ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
