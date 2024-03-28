import React from 'react';
import './Login.css';

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      isLoggedIn : false,
      email: '',
      password: '',
      enableSubmit: false,
    }
  }

  handleLoginSubmit(e) {
    e.preventDefault()
    this.setState({isLoggedIn: true})
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    this.state.email !== '' && this.state.password !== ''
      ? this.setState({ enableSubmit: true }) :
      this.setState({ enableSubmit: false});
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
    this.state.email !== '' && this.state.password !== ''
      ? this.setState({ enableSubmit: true }) :
      this.setState({ enableSubmit: false});
  }

  render () {
      return (
        <>
            <div className='App-body'>
                <p>Login to access the full dashboard</p>
                <form className='form' onSubmit={this.handleLoginSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={this.handleChangeEmail}value={this.state.email}></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={this.handleChangePassword} value={this.state.password}></input>
                    <input  className="submit" type='submit' value="Ok" disabled={!this.state.enableSubmit} />
                </form>
            </div>
        </>
      )
    }
}

export default Login