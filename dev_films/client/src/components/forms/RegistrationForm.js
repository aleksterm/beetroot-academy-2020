import React, { useState } from 'react';

const initialData = {
  email: '',
  password: '',
  passwordConfirm: '',
  agree: false
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [showForm, setShowForm] = useState(true);

  const handleStringChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
  );

  // eslint-disable-next-line
  const handleNumberChange = e => setFormData(
    {...formData, [e.target.name]: parseInt(e.target.value, 10)}
  );

  const handleCheckboxChange = e => setFormData(
    {...formData, [e.target.name]: e.target.checked}
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.agree === true && formData.password === formData.passwordConfirm) {
      console.log(formData);
      setShowForm(false);
      setFormData(initialData);
    }
    console.log('Error in form data');
  }
      

  const handleCancel = e => {
    e.preventDefault();
    setShowForm(false);
    setFormData(initialData);
  }

  return showForm ? (
    <form className="ui form">
      <div className="field">
        <label>Email</label>
        <input type="email" name="email" placeholder="email@example.com" onChange={handleStringChange} />
      </div>
      <div className="field">
        <label>Password</label>
        <div className="two fields">
          <div className="field">
            <input type="password" name="password" placeholder="Enter your password" onChange={handleStringChange} />
          </div>
          <div className="field">
            <input type="password" name="passwordConfirm" placeholder="Confirm your password" onChange={handleStringChange} />
          </div>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" onChange={handleCheckboxChange} name="agree" />
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <div className="ui buttons">
        <button className="ui button" onClick={handleCancel}>Cancel</button>
        <div className="or" />
        <button className="ui positive button" onClick={handleSubmit}>Save</button>
      </div>
    </form>
  ) : null;
}

export default RegistrationForm;
