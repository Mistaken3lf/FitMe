import React from 'react';
import UserCounter from './UserCounter.js';
import ActiveTrainers from './ActiveTrainers.js';
import DeletedTrainers from './DeletedTrainers.js';
import SuspendedTrainers from './SuspendedTrainers.js';

export default class CommandCenter extends React.Component {
  handleClick(e) {
    const clickedButton = e.target.id;
    Session.set("trainerStatus", clickedButton);
  }

  render() {
    if (!Meteor.user()) {
      return (
        <Loading />
      );
    } else if (!Roles.userIsInRole(Meteor.userId(), "admin")) {
      return (
        <Loading />
      );
    } else if(this.props.loading) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "admin")) {
      return (
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card black z-depth-2">
              <div className="row">
                <div className="col s12 m12 l12">
                  <UserCounter totalTrainers={this.props.totalTrainers} totalClients={this.props.totalClients} totalUsers={this.props.totalUsers} />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <h1 className="green-text center-align command"><b>COMMAND CENTER</b></h1>
                  <div className="row">
                    <div className="col s12 m12 l12 center">
                      <button className="btn green white-text waves-effect adminClickedButton adminDashButtonProfile" onClick={this.handleClick} id="activeTrainers">Active Trainers</button>
                      <button className="btn green white-text waves-effect adminClickedButton adminDashButtonClients" onClick={this.handleClick} id="suspendedTrainers">Suspended Trainers</button>
                      <button className="btn green white-text waves-effect adminClickedButton adminDashButtonAccount" onClick={this.handleClick} id="deletedTrainers">Deleted Trainers</button>
                    </div>
                  </div>
                  <div className="card green">
                    <div className="row">
                      {(() => {
                        if(this.props.clickedButton == "activeTrainers") {
                          return (
                            <ActiveTrainers activeTrainers={this.props.activeTrainers} />
                          );
                        } else if(this.props.clickedButton == "suspendedTrainers") {
                          return (
                            <SuspendedTrainers suspendedTrainers={this.props.suspendedTrainers} />
                          );
                        } else if(this.props.clickedButton == "deletedTrainers") {
                          return (
                            <DeletedTrainers deletedTrainers={this.props.deletedTrainers} />
                          );
                        } else {
                          return (
                            <ActiveTrainers activeTrainers={this.props.activeTrainers} />
                          );
                        }
                      })()}
                      <a href="/addTrainerAdmin" className="btn-floating btn-large waves-effect grey darken-3 right addClientButton"><i className="material-icons">add</i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}