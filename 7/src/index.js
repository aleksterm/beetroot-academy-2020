import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import UserList from './components/UserListFunc';
// import UserList from './components/UserListClass';

ReactDOM.render(
  <UserList count={10} />,
  document.getElementById('root')
);
