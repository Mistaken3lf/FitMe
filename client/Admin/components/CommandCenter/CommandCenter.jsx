CommandCenter = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("allUsers");

    return {
      loading: !handle.ready(),

      clickedButton: Session.get("trainerStatus"),

      activeTrainers: Meteor.users.find({
        roles: "trainer",
        userStatus: "active"
      }).fetch(),

      suspendedTrainers: Meteor.users.find({
        roles: "trainer",
        userStatus: "suspended"
      }).fetch(),

      deletedTrainers: Meteor.users.find({
        roles: "trainer",
        userStatus: "deleted"
      }).fetch(),

      totalTrainers: Meteor.users.find({
        roles: "trainer"
      }).count(),

      totalClients: Meteor.users.find({
        roles: "client"
      }).count(),

      totalUsers: Meteor.users.find({
        _id: {
          $ne: Meteor.userId()
        }
      }).count(),

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
    } else if(this.data.loading) {
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
                  <UserCounter totalTrainers={this.data.totalTrainers} totalClients={this.data.totalClients} totalUsers={this.data.totalUsers} />
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
                            <ActiveTrainers activeTrainers={this.data.activeTrainers} />
                          );
                        } else if(this.data.clickedButton == "suspendedTrainers") {
                          return (
                            <SuspendedTrainers suspendedTrainers={this.data.suspendedTrainers} />
                          );
                        } else if(this.data.clickedButton == "deletedTrainers") {
                          return (
                            <DeletedTrainers deletedTrainers={this.data.deletedTrainers} />
                          );
                        } else {
                          return (
                            <ActiveTrainers activeTrainers={this.data.activeTrainers} />
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
})