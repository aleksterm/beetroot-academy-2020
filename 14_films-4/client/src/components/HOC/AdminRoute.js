import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AppContext} from '../App';

const AdminRoute = ({redirectTo, ...rest}) => {
  const { user } = useContext(AppContext);

  return user.role === 'admin'
    ? <Route {...rest} />
    : <Redirect to={redirectTo} />
}

export default AdminRoute;
