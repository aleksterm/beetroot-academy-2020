import React, { useState } from 'react';

const initialData = {
  email: '',
  password: ''
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [showForm, setShowForm] = useState(true);

  const handleStringChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
  );

  // eslint-disable-next-line
  const handleNumberChange = e => setFormData(
    {...formData, [e.target.name]: parseInt(e.target.value, 10)}
  );

  // eslint-disable-next-line
  const handleCheckboxChange = e => setFormData(
    {...formData, [e.target.name]: e.target.checked}
  );

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialData);
  }

  const handleCancel = e => {
    e.preventDefault();
    setShowForm(false);
    setFormData(initialData);
  }

  return showForm ? (
    <form className="ui form">
        <div className="two fields">
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="email@example.com" onChange={handleStringChange} />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={handleStringChange} />
          </div>
        </div>
      <div className="ui buttons">
        <button className="ui button" onClick={handleCancel}>Cancel</button>
        <div className="or" />
        <button className="ui primary button" onClick={handleSubmit}>Login</button>
      </div>
    </form>
  ) : null;
}

export default LoginForm;
