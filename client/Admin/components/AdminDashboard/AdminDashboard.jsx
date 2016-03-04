AdminDashboard = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const trainerId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("currentTrainer", trainerId);

    return {
      loading: !handle.ready(),

      currentTrainer: Meteor.users.findOne({
        _id: trainerId
      }),

      clickedButton: Session.get("adminClickedButton")
    };
  },

  handleClick(e) {
    const clickedButton = e.target.id;
    Session.set("adminClickedButton", clickedButton);
  },

  render() {
    if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (!Roles.userIsInRole(Meteor.userId(), "admin")) {
      return (
        <NotAuthorized />
      );
    } else if (this.data.loading) {
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
                    <h5 className="center green-text">{this.data.currentTrainer.firstName} {this.data.currentTrainer.lastName}</h5>
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
                            if(this.data.clickedButton == "trainersProfile") {
                              return (
                                <TrainersProfile />
                              );
                            } else if(this.data.clickedButton == "trainersClients") {
                              return (
                                <TrainersClients />
                              );
                            } else if(this.data.clickedButton == "accountDetails") {
                              return (
                                <AccountDetails />
                              );
                            } else {
                              return (
                                <TrainersProfile />
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
});