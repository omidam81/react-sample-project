import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {

        const menu = (localStorage.getItem('user'))?
        (<div className="menu">
          <ul>
            <li>
              <Link to="/profile" className="btn btn-danger btn-register"><i className="far fa-user-plus"></i>Profile</Link>
            </li>
            <li><Link to="/logout" className="btn btn-outline-danger btn-login">Log out</Link></li>
            <li><Link to="/search" className="btn btn-link btn-search"><i className="far fa-search"></i> search now</Link></li>
          </ul>
        </div>)
        : 
        (<div className="menu">
        <ul>
          <li>
            <Link to="/register" className="btn btn-danger btn-register"><i className="far fa-user-plus"></i> Register</Link>
          </li>
          <li><Link to="/login" className="btn btn-outline-danger btn-login">Log In</Link></li>
          <li><Link to="/search" className="btn btn-link btn-search"><i className="far fa-search"></i> search now</Link></li>
        </ul>
      </div>)
        ;
        return (
          <header id="header">
            <div className="container">
              <div className="logo">
                <Link to=""><img src="/images/logo.png" alt="" /></Link>
              </div>
              {menu}
            </div>
        </header>
      );
    }
  }
export default Header;

