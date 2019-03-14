import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


class DashboardMenu extends Component {

    constructor(props) {
        super(props);
        console.log("props ===>", props);
        
        this.state = {
            match : props.match,
            path: (props && props.location) ? props.location.pathname: '/dashboard',
            menus : [
                {title: 'Dashboard', link: '/home'},
                {title: 'Profile', link: '/profile'},
                {title: 'Services', link: '/services'},
                {title: 'Branding &amp; Script', link: '/branding'},
                {title: 'polling', link: '/polling'},
                {title: 'Question', link: '/question'},
                {title: 'Plan info', link: '/planinfo'}
            ]
        }
    }
    render() {
        const {path,  menus} = this.state;
        console.log(path);
        return (
            <div className="client-menu">
                {menus.map( (menu, index) => <Link key= {index} className={ (path == '/dashboard' + menu.link)? 'active': ''} to={'/dashboard' + menu.link}>{menu.title}</Link>)}
            </div>
        );
    }
  }


  function mapStateToProps(state) {
      const {match}  =  state;

    return {
        match
    };
}

  


const connectedRegisterPage = connect(mapStateToProps)(withRouter(DashboardMenu));
export { connectedRegisterPage as DashboardMenu };

