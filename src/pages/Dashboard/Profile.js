import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./Login.css";
import { connect } from 'react-redux';
import { userActions } from '../../actions';



class Profile extends Component {
   

  constructor(props) {
    super(props);

    this.state = {
	  UserInfo: props.UserInfo,
	  submitted: false
	};
	
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
	const {name, value} = e.target;
	this.state.UserInfo[name] = value;
    this.setState(this.state.UserInfo);
  }

  handleSubmit(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { UserInfo } = this.state;
		const { dispatch } = this.props;
		dispatch(userActions.saveUserInfo(UserInfo));
  }


  render() {
	const inlineStyle = {minHeight: 150 };
	let {UserInfo} = (this && this.state) ? this.state : {};
	console.log(UserInfo);
      return (
        <React.Fragment>
			<form onSubmit={this.handleSubmit}>
				<div className="row form-group">
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-3 col-form-label fs-14">Name</label>
								<div className="col">
									<input type="text" name="name" onChange={this.onChange.bind(this)} className="form-control" onChange='' value={UserInfo.name}/>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-4 col-form-label fs-14">User Name</label>
								<div className="col">
									<input type="text" name="username" onChange={this.onChange.bind(this)} className="form-control" value={UserInfo.userName} readOnly/>
								</div>
							</div>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-3 col-form-label fs-14">Email</label>
								<div className="col">
									<input type="text" name="email" onChange={this.onChange.bind(this)} className="form-control" value={UserInfo.email} />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-4 col-form-label"></label>
								<div className="col nav">
									<a href="#change-password-Modal" onChange={this.onChange.bind(this)} data-toggle="modal" className="btn btn-danger btn-block">Change Password</a>
								</div>
							</div>
							
						</div>
					</div>
					<div className="row form-group">
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-3 col-form-label fs-14">Mobile</label>
								<div className="col">
									<input type="text" name="mobile" onChange={this.onChange.bind(this)} className="form-control" value={UserInfo.mobile} />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-4 col-form-label fs-14">Calendar Type</label>
								<div className="col">
									<input type="text" name="calendarType" onChange={this.onChange.bind(this)} className="form-control" value={UserInfo.calendarType}/>
								</div>
							</div>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-3 col-form-label fs-14">Location</label>
								<div className="col">
									<input type="text" className="form-control" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-4 col-form-label fs-14">Contry</label>
								<div className="col">
									<input type="text" name="country" onChange={this.onChange.bind(this)} className="form-control" value={UserInfo.country}/>
								</div>
							</div>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-3 col-form-label fs-14">City</label>
								<div className="col">
									<input type="text" name="city" onChange={this.onChange.bind(this)} className="form-control" value={UserInfo.city}/>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-4 col-form-label fs-14">Tel Office</label>
								<div className="col">
									<input type="text" name="telloffice" onChange={this.onChange.bind(this)} className="form-control" value={UserInfo.telOffice}/>
								</div>
							</div>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-md-12">
							<div className="form-row">
								<label className="col-sm-1-5 col-form-label fs-14">Address</label>
								<div className="col">
									<input type="text" name="address" onChange={this.onChange.bind(this)} className="form-control" value={UserInfo.address} />
								</div>
							</div>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-3 col-form-label fs-14">Website</label>
								<div className="col">
									<input type="text" name="website" onChange={this.onChange.bind(this)} className="form-control" value={UserInfo.website}/>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-4 col-form-label fs-14">Parking</label>
								<div className="col">
									<label className="switch mt-1">
										<input type="checkbox" checked="" />
										<span className="slider round"></span>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-3 col-form-label fs-14">QR Code</label>
								<div className="col">
									<input type="text" className="form-control mb-3" />
									<div className="clearfix"></div>
									<img src="https://chart.googleapis.com/chart?cht=qr&chl=DATA&chs=100x100&chld=L|0" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-4 col-form-label fs-14">Location on map</label>
								<div className="col">
									<div id="google-map" style={inlineStyle}></div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="form-row">
								<label className="col-sm-3 col-form-label fs-14"></label>
								<div className="col">
									<button type='submit' className="btn btn-danger btn-block">Save Changes</button>
								</div>
							</div>
						</div>
			    </div>
			</form>
        </React.Fragment>
      );
    }
  }


function mapStateToProps(state) {
    const { UserInfo } = state.UserInfo;
    return {
      UserInfo
    };
}

const connectedRegisterPage = connect(mapStateToProps)(Profile);
export { connectedRegisterPage as Profile };