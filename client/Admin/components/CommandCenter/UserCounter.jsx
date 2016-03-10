UserCounter = React.createClass({
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

      clickedButton: Session.get("trainerStatus")
    };
  },
  render() {
    if(this.data.loading) {
      return (
        <Loading />
      );
    } else {
      return (
        <div className="row">
          <div className="col s12 m4 l4">
            <h5 className="green-text center-align">TOTAL TRAINERS: {this.data.totalTrainers}</h5>
          </div>
          <div className="col s12 m4 l4">
            <h5 className="green-text center-align">TOTAL CLIENTS: {this.data.totalClients}</h5>
          </div>
          <div className="col s12 m4 l4">
            <h5 className="green-text center-align">TOTAL USERS: {this.data.totalUsers}</h5>
          </div>
        </div>
      );
    }
  }
});