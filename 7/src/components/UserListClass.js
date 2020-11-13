import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    const user = this.props.user;
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
}

class SearchField extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input onChange={this.props.onChange} type="text" className="form-control" placeholder="Search for user..." />
      </div>
    )
  }
}

class UserList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false,
      error: null,
      search: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({search: event.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        users => {
          const outputUsers = this.props.count > 0 ? users.slice(0, this.props.count) : users;
          this.setState({
            users: outputUsers,
            isLoaded: true,
          })
        },
        error => this.setState({
          isLoaded: false,
          error
        })
      )
  }

  render () {
    const { users, isLoaded, error } = this.state;

    if (error) {
      return <div className="alert alert-danger">{error.message}</div>;
    } else if (isLoaded === false) {
      return <div className="alert alert-info">Loading...</div>;
    } else {
      return (
        <div className="container p-3">
          <SearchField onChange={this.handleSearch} />
          <ul className='list-group userlist'>
            {
              users
                .filter(user => user.name.toLowerCase().includes(this.state.search))
                .map(user => <User key={user.id} user={user} />)
            }
          </ul>
        </div>
      );
    }
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
