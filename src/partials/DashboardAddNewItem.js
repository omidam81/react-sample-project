import React, { Component } from 'react';

class DashboardMenu extends Component {
    render() {
        return (
            <a href="#add-event-Modal" data-toggle="modal" className="btn btn-primary float-right">Add new event</a>
        );
    }
  }
export default DashboardMenu;