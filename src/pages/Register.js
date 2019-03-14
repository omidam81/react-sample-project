import React, { Component } from "react";
import { Link} from "react-router-dom";
//import "./Login.css";
import { connect } from 'react-redux';
import { userActions } from '../actions';



class Register extends Component {
    constructor(props) {
      super(props);

      this.state = {
          user: {
            userName: '',
            password: '',
          },
          submitted: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const { name, value } = event.target;
      const { user } = this.state;
      this.setState({
          user: {
              ...user,
              [name]: value
          }
      });
  }

  handleSubmit(event) {
      console.log("im herer", this.props);
      event.preventDefault();
      this.setState({ submitted: true });
      const { user } = this.state;

      //user.name = user.userName;
      const { dispatch } = this.props;
      if (user.userName && user.password) {
          dispatch(userActions.register(user));
      }
    }

    render() {
      return (
        <form action="" method="post"  onSubmit={this.handleSubmit}>
            <p className="text1">Online Appointment Management & Booking System</p>
            <h1 className="text2">Over 10+ Customers in World have joined us.</h1>
            <p className="text3">What Are You Waiting For? </p>
            <div className="container mini-container">
                <div className="login-inputs">
                    <input type="email" name="userName" placeholder="Email Address" onChange={this.handleChange}/>
                    <hr />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                </div>
            </div>
            <div className="text4">Sign Up <Link to="/facebook" className="text-facebook">Facebook</Link> or <Link to="/gmail" className="text-gmail">Gmail</Link></div>
            <div className="container mini-container">
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </div>
            <div className="mb-2">Already have a Plano account? <Link to="/login"><strong>Log In</strong></Link></div>
            <div>By signing up you agree to the <Link to="/privacy"><u>Privacy Policy</u></Link>, <Link to="term"><u>Terms Of Use</u></Link></div>
        </form>
      );
    }
  }


function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(Register);
export { connectedRegisterPage as Register };