import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
          <footer id="footer">
            <div className="container">
              <div className="row main-row">
                <div className="col-md-4 about-us">
                  <h4 className="footer-title">About Us</h4>
                  <div className="content">
                    <p className="text">Lorem ipsum dolor sit amet eusiodim consectuer adipiscing elit, sed diam nonummy acces sanitem nibhumils euismod tincidunt ut laoreetos dolore magna.</p>
                    <ul className="social-icons">
                      <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href=""><i className="fab fa-twitter"></i></a></li>
                      <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                      <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href=""><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 our-services">
                  <h4 className="footer-title">OUR SERVICE</h4>
                  <div className="content">
                    <ul>
                      <li><a href="">Shipping & Return</a></li>
                      <li><a href="">international Shipping</a></li>
                      <li><a href="">international Shipping</a></li>
                      <li><a href="">Affliates</a></li>
                      <li><a href="">Careers</a></li>
                      <li><a href="">FAQ</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 contact-us">
                  <h4 className="footer-title">CONTACT US</h4>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectutuer adipiscing elit.</p>
                    <br />
                    <p className="contact-row"><span className="icon"><i className="fas fa-location-arrow"></i></span> 404 Designer, iran</p>
                    <p className="contact-row"><span className="icon"><i className="fas fa-envelope"></i></span> Info@logo.com</p>
                    <p className="contact-row"><span className="icon"><i className="fas fa-phone"></i></span> 120936373</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
      );
    }
  }