import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
          <div className="col user-info">
            <img src="/images/user-info.png" className="user-pic" />
            <div className="user-info-inner align-middle">
              <h1 className="user-title">Ebrahim Abdollahi</h1>
              <p className="user-desc">Graphic / Web &amp; Mobile Ui Designer</p>
            </div>
        </div>

      );
    }
  }
export default UserInfo;

