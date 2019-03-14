import React, { Component } from "react";
import {UserRating, 
  UserInfo, 
  DashboardMenu, 
  DashboardContact, 
  DashboardUpgrade} from '../../partials/index';

import {Profile, Home, Services} from './index';


import { Switch, Route, withRouter, Redirect} from 'react-router-dom';


export class Dashboard extends Component {
    constructor(props) {
      super(props);
    }
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
    render() {
      return (
        <section className="single-section section-bg-light">
        <div className="user-info-blue-container">
          <div className="container">
            <div className="row align-items-center">
              <UserInfo />
              <UserRating />
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="client-sidebar box-shadow-type1 bg-white p-3 pb-5">
                <DashboardMenu />
                <DashboardUpgrade />
                <DashboardContact />
              </div>
            </div>
            <div className="col-md-8">
              <Route exact path="/dashboard/home" component={withRouter(Home)}/>
              <Route exact path="/dashboard/profile" component={withRouter(Profile)}/>
              <Route exact path="/dashboard/services" component={withRouter(Services)}/>
            </div>
          </div>
        </div>
      </section>
      );
    }
  }