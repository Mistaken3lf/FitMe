CommandCenter = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("allUsers");

    return {
      loading: !handle.ready(),

      totalTrainers: Meteor.users.find({
        roles: 'trainer'
      }).count(),

      totalClients: Meteor.users.find({
        roles: 'client'
      }).count(),

      totalUsers: Meteor.users.find({
        _id: {
          $ne: Meteor.userId()
        }
      }).count(),

      activeTrainers: Meteor.users.find({
        roles: 'trainer',
        userStatus: "active"
      }).fetch(),

      suspendedTrainers: Meteor.users.find({
        roles: 'trainer',
        userStatus: "suspended"
      }).fetch(),

      deletedTrainers: Meteor.users.find({
        roles: 'trainer',
        userStatus: "deleted"
      }).fetch(),
    };
  },

  render() {
    if(!Roles.userIsInRole(Meteor.userId(), "admin")) {
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
                  <UserCounter totalTrainers={this.data.totalTrainers} totalClients={this.data.totalClients} totalUsers={this.data.totalUsers} />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <h1 className="green-text center-align command"><b>COMMAND CENTER</b></h1>
                  <div className="card green">
                    <div className="row">
                      <ActiveTrainers activeTrainers={this.data.activeTrainers} />
                    </div>
                    <div className="row">
                      <SuspendedTrainers suspendedTrainers={this.data.suspendedTrainers} />
                    </div>
                    <div className="row">
                      <DeletedTrainers deletedTrainers={this.data.deletedTrainers} />
                      <a href="/addTrainerAdmin" className="btn-floating btn-large waves-effect grey darken-3 right addClientButton"><i className="material-icons">add</i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
})