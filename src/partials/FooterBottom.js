/**/


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FooterBottom extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <section id="footer-bottom">
                <div className="container">
                <div className="copyright">Copyright  © <a href="" className="logo">LOGO</a> 2018.  All Right Reserved</div>
                <div className="cards">
                    <img src="images/footer-cards.png" alt="" />
                </div>
                </div>
            </section>
      );
    }
  }


