import React from 'react';
import Loading from '../../../../common/components/Loading/Loading.js';
import NotAuthorized from '../../../../common/components/NotAuthorized/NotAuthorized.js';

ClientsSchedule = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const clientId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("currentClientsProfile", clientId);

    return {
      loading: !handle.ready(),

      currentClient: Meteor.users.findOne({
        _id: clientId
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
    } else if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
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
            <div className="row">
              <ScheduleInfo scheduleData={this.data.currentClient}/>
            </div>
            <div className="row">
              <ClientsMonday scheduleData={this.data.currentClient} />
              <ClientsTuesday scheduleData={this.data.currentClient} />
            </div>
            <div className="row">
              <ClientsWednesday scheduleData={this.data.currentClient} />
              <ClientsThursday scheduleData={this.data.currentClient} />
            </div>
            <div className="row">
              <ClientsFriday scheduleData={this.data.currentClient} />
              <ClientsSaturday scheduleData={this.data.currentClient} />
            <div className="row">
              <ClientsSunday scheduleData={this.data.currentClient} />
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