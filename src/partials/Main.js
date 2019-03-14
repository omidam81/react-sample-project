import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {Login , Register, Profile, Dashboard} from '../pages';
import { history } from '../helpers';
import { PrivateRoute } from '../components';
import { alertActions } from '../actions';

import { connect } from 'react-redux';
class Main2 extends Component {
    constructor(props) {
      super(props);

      const { dispatch } = this.props;
        history.listen((location, action) => {
            console.log(location)
            // clear alert on location change
           dispatch(alertActions.clear());
        });
    }
    render() {
        const { alert } = this.props;
        return (
        <section id="section-form">
            <div className="container">
                <div>{alert && alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}</div>
                    <div>
                        <Switch>
                            <Route exact path="/login" component={withRouter(Login)}/>
                            <Route exact path="/register" component={withRouter(Register)}/>
                            <PrivateRoute path="/dashboard" component={withRouter(Dashboard)}/>
                            <Redirect to='/login'></Redirect>
                        </Switch>
                    </div>
            </div>
        </section>  
      );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}



const Main = connect(mapStateToProps)(Main2);
export default Main;