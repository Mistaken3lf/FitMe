import React from 'react';
import moment from 'moment';
import {Roles} from 'meteor/alanning:roles';
import {FlowRouter} from 'meteor/kadira:flow-router';
import Loading from '../../../../common/components/Loading/Loading.js';
import MyScheduleInfo from './MyScheduleInfo.js';
import MyMonday from './days/MyMonday.js';
import MyTuesday from './days/MyTuesday.js';
import MyWednesday from './days/MyWednesday.js';
import MyThursday from './days/MyThursday.js';
import MyFriday from './days/MyFriday.js';
import MySaturday from './days/MySaturday.js';
import MySunday from './days/MySunday.js';

export default class MySchedule extends React.Component {
  componentDidMount() {
    if (!Roles.userIsInRole(Meteor.userId(), "client") && !Meteor.loggingIn()) {
      FlowRouter.go("/notAuthorized");
      return false;
    }
  }

  startOfWeek() {
    let startOfWeek = moment().startOf("week").format("ddd. MMM Do");
    return startOfWeek;
  }

  endOfWeek() {
    let endOfWeek = moment().endOf("week").format("ddd. MMM Do");
    return endOfWeek;
  }

  render() {
    if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (this.props.loading) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "client")) {
      return (
        <div className="card grey lighten-4">
          <div className="row">
            <div className="col s12 m12 l12">
              <div className="card white z-depth-1">
                <div className="blue card-title center-align white-text">SCHEDULE CARD</div>
              </div>
            </div>
            <div className="row">
              <h5 className="center"><b>WEEK OF:</b><br /> {this.startOfWeek()} - {this.endOfWeek()}</h5>
            </div>
            <MyScheduleInfo scheduleData={this.props.currentClient}/>
            <div className="row">
              <div className="col s12 m12 l12">
                <h6 className="red-text">* You Must Confirm Your Scheduled Appointment</h6>
              </div>
            </div>
            <div className="row">
              <MyMonday scheduleData={this.props.currentClient} />
              <MyTuesday scheduleData={this.props.currentClient} />
            </div>
            <div className="row">
              <MyWednesday scheduleData={this.props.currentClient} />
              <MyThursday scheduleData={this.props.currentClient} />
            </div>
            <div className="row">
              <MyFriday scheduleData={this.props.currentClient} />
              <MySaturday scheduleData={this.props.currentClient} />
            <div className="row">
              <MySunday scheduleData={this.props.currentClient} />
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
}