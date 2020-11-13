import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const User = props => {
  const user = props.user;
  return (
    <li className="list-group-item">
      <h5 className="mb-1">{user.name}</h5>
      <p className="mb-1">
        <small>username: </small>{user.username}<br />
        <small>email: </small>{user.email}
      </p>
    </li>
  );
}

const SearchField = props => (
  <div className="input-group mb-3">
    <input onChange={props.onChange} type="text" className="form-control" placeholder="Search for user..." />
  </div>
)

const UserList = props => {
  const [ users, setUsers ] = useState([]);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ search, setSearch ] = useState('');
  
  const handleSearch = event => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(
      users => {
        props.count > 0
          ? setUsers(users.slice(0, props.count))
          : setUsers(users);
        setIsLoaded(true);
      },
      error => {
        setIsLoaded(false);
        setError(error);
      }
    )
  }, [props.count])
  

  if (error) {
    return <div className="alert alert-danger">{error.message}</div>;
  } else if (isLoaded === false) {
    return <div className="alert alert-info">Loading...</div>;
  } else {
    return (
      <div className="container p-3">
        <SearchField onChange={handleSearch} />
        <ul className='list-group userlist'>
          {
            users
              .filter(user => user.name.toLowerCase().includes(search))
              .map(user => <User key={user.id} user={user} />)
          }
        </ul>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string
  })
}

SearchField.propTypes = {
  onChange: PropTypes.func
}

UserList.propTypes = {
  count: PropTypes.number
}

export default UserList;
