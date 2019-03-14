/* global $ */

import React, { Component } from "react";
import {UserRating, UserInfo, DashboardMenu, DashboardContact, DashboardUpgrade, DashboardStatistics, DashboardAddNewItem} from '../../partials/index';



export class Services extends Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount(){
      
    }
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
    render() {
      return (
        <React.Fragment>
            <div class="row">
					<div class="col-md-8 mb-2"><h4>Services</h4></div>
					<div class="col-md-4 mb-2">
						<a href="#AddServiceModal" data-toggle="modal" class="btn btn-primary float-right">Create Service</a>
					</div>
				</div>
				
				<div class="box-shadow-type1 bg-white p-2">
					<div class="table-responsive">
						<table class="table table-type1 text-center mb-0">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col"></th>
									<th scope="col">Name</th>
									<th scope="col">Time</th>
									<th scope="col">Duration</th>
									<th scope="col">Service type</th>
									<th scope="col"></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th class="align-middle" scope="row">1.</th>
									<td class="align-middle">
										<img src="/images/testimonial-img4.jpg" style={{maxWidth: 50}} class="rounded-circle2 img-fluid" />
									</td>
									<td class="align-middle">omid</td>
									<td class="align-middle">8:00am-8:30am</td>
									<td class="align-middle">30 Min</td>
									<td class="align-middle">XXX</td>
									<td class="align-middle"><a href="" class="btn btn-danger">Booking</a></td>
								</tr>
								<tr>
									<th class="align-middle" scope="row">1.</th>
									<td class="align-middle">
										<img src="/images/testimonial-img3.jpg" style={{maxWidth: 50}} class="rounded-circle2 img-fluid" />
									</td>
									<td class="align-middle">mamo</td>
									<td class="align-middle">8:00am-8:30am</td>
									<td class="align-middle">30 Min</td>
									<td class="align-middle">XXX</td>
									<td class="align-middle"><a href="" class="btn btn-danger">Booking</a></td>
								</tr>
								<tr>
									<th class="align-middle" scope="row">1.</th>
									<td class="align-middle">
										<img src="/images/testimonial-img2.jpg" style={{maxWidth: 50}} class="rounded-circle2 img-fluid" />
									</td>
									<td class="align-middle">keyhan</td>
									<td class="align-middle">8:00am-8:30am</td>
									<td class="align-middle">30 Min</td>
									<td class="align-middle">XXX</td>
									<td class="align-middle"><a href="" class="btn btn-danger">Booking</a></td>
								</tr>
								<tr>
									<th class="align-middle" scope="row">1.</th>
									<td class="align-middle">
										<img src="/images/testimonial-img1.jpg" style={{maxWidth: 50}} class="rounded-circle2 img-fluid" />
									</td>
									<td class="align-middle">ibo</td>
									<td class="align-middle">8:00am-8:30am</td>
									<td class="align-middle">30 Min</td>
									<td class="align-middle">XXX</td>
									<td class="align-middle"><a href="" class="btn btn-danger">Booking</a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
        </React.Fragment>
      );
    }
  }