import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  validateForm = () => {
    const formInputs = ['firstName', 'lastName', 'email', 'password'];

    for ( let i = 0; i < formInputs.length; i++ ) {
      const inputName = formInputs[i];

      if (!this.state[inputName].length) {
        return false;
      }
    }

    return true;
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      console.log('Success!');
    } else {
      console.log('Failure!');
    }
  };

  render() {
    return (
      <div id="registration-form-block">
        <form id="registration-form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="firstName">First name</label>
          <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange}/>
          <label htmlFor="lastName">Last name</label>
          <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange}/>
          <label htmlFor="email">Email address</label>
          <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          <button className="submit-button no-margin-bottom" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;