import React, { Component } from "react";
import { userActions } from '../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';



class Login extends Component {
    
    constructor(props) {
      super(props);

      // reset login status
      this.props.dispatch(userActions.logout());

      this.state = {
        userName: '',
          password: '',
          submitted: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("eeeee");
        this.setState({ submitted: true });
        const { userName, password } = this.state;
        const { dispatch } = this.props;
        console.log(this.state);
        if (userName && password) {
            dispatch(userActions.login(userName, password));
        }
    }
    render() {
      const { loggingIn } = this.props;
      const { userName, password, submitted } = this.state;

      return (
          <form onSubmit={this.handleSubmit}>
                <h1 className="text2">Customer Login</h1>
                <div className="container mini-container">
                <div className="login-inputs">
                    <input type="email" name="userName" placeholder="Email Address" onChange={this.handleChange}/>
                    <hr />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                </div>
                </div>
                <div className="text4">Login With <Link to="/facebook" className="text-facebook">Facebook</Link> or <Link to="/gmail" className="text-gmail">Gmail</Link></div>
                <div className="container mini-container">
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
                <div className="mb-2"><Link to="/reset">Forgot Password?</Link></div>
                <div>Don't have an account? <Link to="/register"><strong>Sign Up</strong></Link></div>
          </form>
      );
    }
  }



function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login }; 