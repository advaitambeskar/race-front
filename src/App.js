import React, { Component } from 'react';
import './App.css';
import Chart from './components/chart'
import axios from 'axios';

const bcrypt = require('bcryptjs');

// API URL for GETTING THE DATA WE NEED
const API_URL = "http://localhost:3001/sendALL?";

// API URL AUTHENTICATE for AUTHENTICATION
const API_URL_AUTHENTICATE = "http://localhost:3001/frontendpoint?";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      isAuthenticated: false,
      username: "",
      password: "",
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // onChanged Property
  handleChangeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  // onChangedProperty
  handleChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }


  async handleSubmit() {
    console.log(this.state.username);
    console.log(this.state.password);
    var hash = bcrypt.hashSync(this.state.password, 8);
    var credentialQuery = `username=${this.state.username}&password=${hash}`
    this.authenticate(credentialQuery);
  }
  async authenticate(credentialQuery){
    await axios.get(API_URL_AUTHENTICATE+credentialQuery)
    .then(response => {
      this.setState({
        isAuthenticated : response.data.authentication
      })
    })
    if(this.state.isAuthenticated === true){
      await axios.get(API_URL+credentialQuery)
      .then(response =>{ this.setState({
        results: response.data.results
      })
      })
    }
    console.log(this.state.results);
  }
  render() {
    const isAuthenticated = this.state.isAuthenticated;
    if(!isAuthenticated) {
      return (
        <div>
          <form>
            <label>
              Username:
              <input type='text' name='username' placeholder='advait' required onChange={this.handleChangeUsername}></input>
            </label>
            <br />
            <label>
              Password:
              <input type='password' name='password' placeholder='advait' required onChange={this.handleChangePassword}></input>
            </label>
            <br />
            <input type="button" value="Submit" onClick = {this.handleSubmit}
            />
          </form>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Chart data={this.state.results} />
        </div>
      );
    }
  }
}

export default App;

/* 

    } else {
*/