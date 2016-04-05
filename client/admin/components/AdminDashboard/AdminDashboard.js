import React from 'react';
import TrainersProfile from './TrainersProfile/TrainersProfile.js';
import TrainersClients from './TrainersClients/TrainersClients.js';
import AccountDetails from './AccountDetails/AccountDetails.js';

export default class AdminDashboard extends React.Component {
  handleClick(e) {
    const clickedButton = e.target.id;
    Session.set("adminClickedButton", clickedButton);
  }

  render() {
    if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (!Roles.userIsInRole(Meteor.userId(), "admin")) {
      return (
        <NotAuthorized />
      );
    } else if (this.props.loading) {
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
                  <h1 className="green-text center-align command"><b>ADMIN DASHBOARD</b></h1>
                  <div className="row">
                    <h5 className="center green-text">{this.props.currentTrainer.firstName} {this.props.currentTrainer.lastName}</h5>
                  </div>
                  <div className="row">
                    <div className="col s12 m12 l12 center">
                      <button className="btn green white-text waves-effect adminClickedButton adminDashButtonProfile" onClick={this.handleClick} id="trainersProfile">Profile</button>
                      <button className="btn green white-text waves-effect adminClickedButton adminDashButtonClients" onClick={this.handleClick} id="trainersClients">Clients</button>
                      <button className="btn green white-text waves-effect adminClickedButton adminDashButtonAccount" onClick={this.handleClick} id="accountDetails">Account</button>
                    </div>
                  </div>
                  <div className="card green">
                    <div className="row">
                      <div className="col s12 l12 m12">
                        <div className="row">
                          {(() => {
                            if(this.props.clickedButton == "trainersProfile") {
                              return (
                                <TrainersProfile trainerData={this.props.currentTrainer}/>
                              );
                            } else if(this.props.clickedButton == "trainersClients") {
                              return (
                                <TrainersClients trainersClients={this.props.trainersClients}/>
                              );
                            } else if(this.props.clickedButton == "accountDetails") {
                              return (
                                <AccountDetails accountDetails={this.props.currentTrainer} clientCount={this.props.trainersClientCount}/>
                              );
                            } else {
                              return (
                                <TrainersProfile trainerData={this.props.currentTrainer} />
                              );
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
}