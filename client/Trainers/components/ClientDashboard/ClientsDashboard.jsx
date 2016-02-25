ClientsDashboard = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const clientId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("currentClientsProfile", clientId);

    return {
      loading: !handle.ready(),

      myClient: Meteor.users.findOne({
        _id: clientId
      }),

      clickedButton: Session.get("clickedButton")
    }
  },

  handleClick(e) {
    //Set the active template based on button clicked on dashboard
    let clickedButton = e.target.id;
    Session.set("clickedButton", clickedButton);
  },

  render() {
    if(Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <div>
          <div className="row">
            <div className="col s12 m12 l3 offset-l3">
              <img className="responsive-img profilePic" src="/Dashboard/Profile/profilePicture.jpg" />
            </div>
            <div className="col s12 m12 l1">
              <img className="responsive-img blueLine" src="/Dashboard/Profile/blueLine.jpg" />
            </div>
            <div className="col s12 m12 l3">
            <h5 className="center blue-text trainerViewDashNameText"><b>First Last</b></h5>
            <h5 className="center blue-text trainerViewDashboardText">DASHBOARD</h5>
          </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12 center">
              <button className="btn blue clickedButton waves-effect trainerDashButtonProfile" id="clientProfile" onClick={this.handleClick}>Profile</button>
              <button className="btn blue clickedButton waves-effect trainerDashButtonSchedule" id="clientSchedule" onClick={this.handleClick}>Schedule</button>
              <button className="btn blue clickedButton waves-effect trainerDashButtonStats" id="clientStats" onClick={this.handleClick}>Stats</button>
              <button className="btn blue clickedButton waves-effect trainerDashButtonCardio" id="clientCardio" onClick={this.handleClick}>Cardio</button>
              <button className="btn blue clickedButton waves-effect trainerDashButtonWorkout" id="clientWorkout" onClick={this.handleClick}>Workout</button>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              {(() => {
                if(this.data.clickedButton == "clientProfile") {
                  return (
                    <ClientsProfile />
                  );
                } else if(this.data.clickedButton == "clientSchedule") {
                  return (
                    <ClientsSchedule />
                  );
                } else if(this.data.clickedButton == "clientStats") {
                  return (
                    <ClientsStats />
                  );
                } else if(this.data.clickedButton == "clientCardio") {
                  return (
                    <ClientsCardio />
                  );
                } else if(this.data.clickedButton == "clientWorkout") {
                  return (
                    <ClientsWorkout />
                  );
                } else {
                  return (
                    <ClientsProfile />
                  );
                }
              })()}
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