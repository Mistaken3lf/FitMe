import React from 'react';
import Loading from '../../../common/components/Loading/Loading.js';
import NotAuthorized from '../../../common/components/NotAuthorized/NotAuthorized.js';

MyAccount = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const myProfile = Meteor.subscribe("myProfile");
    const currentClients = Meteor.subscribe("currentClients");

    return {
      loading: !myProfile.ready() || !currentClients.ready(),

      accountData: Meteor.users.findOne({
        _id: Meteor.userId()
      }),

      clientCount: Meteor.users.find({
        createdBy: Meteor.userId()
      }).count()
    }
  },

  deleteAccount() {
    //Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Are you sure?",
      text: "Your account will be completely removed, all clients, workouts and related data will be removed from FitMe",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete account!",
      closeOnConfirm: false
    }, (isConfirm) => {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Deleted!', 'Your account has been removed.', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("deleteAccount");
        FlowRouter.go("/");

        //Log user out
        Meteor.logout();
      } else {
        swal('Cancelled', 'Account is safe now.', 'error');
      }
    });
  },

  changePassword() {
    FlowRouter.go("/changePassword");
  },

  render() {
    if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (!Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <NotAuthorized />
      );
    } else if (this.data.loading) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card z-depth-3 grey lighten-4">
              <div className="col s12 m12 l12">
                <div className="card white">
                  <div className="blue card-title center-align white-text">MY ACCOUNT</div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="card">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <div className="row">
                          <div className="col s12 m12 l12">
                            <AccountTable accountData={this.data.accountData} clientCount={this.data.clientCount}/>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="row center">
                          <h3 className="blue-text">Plans</h3>
                          <div className="section">
                            <div className="row">
                              <FreePlan userStatus={this.data.accountData} />
                              <MonthlyPlan userStatus={this.data.accountData} />
                              <SixMonthPlan userStatus={this.data.accountData} />
                              <YearlyPlan userStatus={this.data.accountData} />
                            </div>
                          </div>
                          <div className="row center">
                            <div className="col s12 m4 offset-m4 l4 offset-l4">
                              <h3 className="center blue-text">Extras</h3>
                            </div>
                          </div>
                          <div className="row">
                            <AddFiveClients userStatus={this.data.accountData} />
                            <AddTenClients userStatus={this.data.accountData} />
                            <AddTwentyClients userStatus={this.data.accountData} />
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="row center">
                          <div className="col s12 m4 offset-m4 l4 offset-l4">
                            <h5 className="center blue-text">Change Password</h5>
                            <a href="/changePassword" className="btn blue waves-effect" onClick={this.changePassword}>CHANGE PASSWORD</a>
                          </div>
                        </div>
                        <br />
                        <br />
                        <h3 className="center red-text">DANGER ZONE</h3>
                        <div className="row center">
                          <div className="col s12 m4 offset-m4 l4 offset-l4">
                            <button className="btn red waves-effect" onClick={this.deleteAccount}>DELETE ACCOUNT</button>
                          </div>
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
});