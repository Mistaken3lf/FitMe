import React from 'react';

MySchedule = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("myProfile");

    return {
      loading: !handle.ready(),

      currentClient: Meteor.users.findOne({
        _id: Meteor.userId()
      }),
    };
  },

  startOfWeek() {
    let startOfWeek = moment().startOf("week").format("ddd. MMM Do");
    return startOfWeek;
  },

  endOfWeek() {
    let endOfWeek = moment().endOf("week").format("ddd. MMM Do");
    return endOfWeek;
  },

  render() {
    if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (this.data.loading) {
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
            <MyScheduleInfo scheduleData={this.data.currentClient}/>
            <div className="row">
              <div className="col s12 m12 l12">
                <h6 className="red-text">* You Must Confirm Your Scheduled Appointment</h6>
              </div>
            </div>
            <div className="row">
              <MyMonday scheduleData={this.data.currentClient} />
              <MyTuesday scheduleData={this.data.currentClient} />
            </div>
            <div className="row">
              <MyWednesday scheduleData={this.data.currentClient} />
              <MyThursday scheduleData={this.data.currentClient} />
            </div>
            <div className="row">
              <MyFriday scheduleData={this.data.currentClient} />
              <MySaturday scheduleData={this.data.currentClient} />
            <div className="row">
              <MySunday scheduleData={this.data.currentClient} />
            </div>
          </div>
        </div>
      </div>
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
});