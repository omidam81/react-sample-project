import React, { Component } from 'react';

class UserRating extends Component {
    render() {
        return (
            <div className="col user-rating">
                <span className="view-star-rating star-light star-small"><span style={{width: '60%'}} /></span>
            </div>
        );
    }
  }
export default UserRating;