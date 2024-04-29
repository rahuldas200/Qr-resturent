import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children }) => {
  const {token} = useSelector( (state) => state.auth);

  if (token !== null) {
    return children
  } else {
    return <Navigate to="/login" />
  }
};

export default PrivateRoute;
