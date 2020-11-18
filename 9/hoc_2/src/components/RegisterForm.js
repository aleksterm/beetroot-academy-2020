import React from "react";
import withHandlers from '../HOC/withHandlers';

// const initState = { login: "", email: "", password: "", passwordConfirm: "" };

const RegisterForm = ({ data, handleChange, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="form-group">
        <input
          onChange={handleChange}
          value={data.login}
          name="login"
          className="form-control"
          placeholder="Login"
        />
      </div>

      <div className="form-group">
        <input
          onChange={handleChange}
          value={data.email}
          name="email"
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange}
          value={data.password}
          name="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange}
          value={data.passwordConfirm}
          name="passwordConfirm"
          className="form-control"
          placeholder="Password confirmation"
        />
      </div>

      <button className="btn btn-success">Register</button>
    </form>
  </div>
)

export default withHandlers(RegisterForm);
