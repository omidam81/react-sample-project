import React, { Component } from 'react';

class DashboardMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="clearfix mb-2"><h4>Statistics</h4></div>
                <div className="box-shadow-type1 bg-white mb-4 p-3">
                    <div className="row no-gutters">
                        <div className="col-lg-7">
                        <p className="mb-2">Total services served : <strong className="text-danger">1024</strong></p>
                        <p className="mb-2">Today service : <strong className="text-danger">60</strong></p>
                        <p className="mb-2">Today services Reserved : <strong className="text-danger">48</strong></p>
                        <p className="mb-0">Documents to review : <strong className="text-danger">2</strong> <span className="btn btn-primary btn-sm ml-2">View</span></p>
                        </div>
                        <div className="col-lg-5">
                        <img className="img-fluid d-block mx-auto" src="images/ads-pic1.jpg" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
  }
export default DashboardMenu;