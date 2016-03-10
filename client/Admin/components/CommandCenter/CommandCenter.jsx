CommandCenter = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      clickedButton: Session.get("trainerStatus"),

      currentUser: Meteor.user()
    };
  },

  handleClick(e) {
    const clickedButton = e.target.id;
    Session.set("trainerStatus", clickedButton);
  },

  render() {
    if (!this.data.currentUser) {
      return (
        <Loading />
      );
    } else if (!Roles.userIsInRole(Meteor.userId(), "admin")) {
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
                  <UserCounter totalTrainers={this.data.totalTainers} totalClients={this.data.totalClients} totalUser={this.data.totalUsers} />
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
                        if(this.data.clickedButton == "activeTrainers") {
                          return (
                            <ActiveTrainers />
                          );
                        } else if(this.data.clickedButton == "suspendedTrainers") {
                          return (
                            <SuspendedTrainers />
                          );
                        } else if(this.data.clickedButton == "deletedTrainers") {
                          return (
                            <DeletedTrainers />
                          );
                        } else {
                          return (
                            <ActiveTrainers />
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
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
})