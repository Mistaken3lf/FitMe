MyDashboard = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("myProfile");

    const currentClient = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    return {
      loading: !handle.ready(),

      currentClient: currentClient || {},

      myClickedButton: Session.get("myClickedButton")
    }
  },

  handleClick(e) {
    //Set the active template based on button clicked on dashboard
    let clickedButton = e.target.id;
    Session.set("myClickedButton", clickedButton);
  },

  render() {
    if(this.data.loading) {
      return (
        <Loading />
      );
    } else if(Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if(Roles.userIsInRole(Meteor.userId(), "client")) {
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
            <h5 className="center blue-text trainerViewDashNameText"><b>{this.data.currentClient.firstName} {this.data.currentClient.lastName}</b></h5>
            <h5 className="center blue-text trainerViewDashboardText">DASHBOARD</h5>
          </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12 center">
              <button className="btn blue myClickedButton waves-effect clientDashButtonMySchedule" id="mySession" onClick={this.handleClick}>My Schedule</button>
              <button className="btn blue myClickedButton waves-effect clientDashButtonStats" id="myStats" onClick={this.handleClick}>Stats</button>
              <button className="btn blue myClickedButton waves-effect clientDashButtonCardio" id="myCardio" onClick={this.handleClick}>Cardio</button>
              <button className="btn blue myClickedButton waves-effect clientDashButtonWorkout" id="myWorkout" onClick={this.handleClick}>Workout</button>
              <button className="btn blue myClickedButton waves-effect clientDashButtonMyTrainer" id="myTrainer" onClick={this.handleClick}>My Trainer</button>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              {(() => {
                if(this.data.myClickedButton == "mySession") {
                  return (
                    <MySchedule />
                  );
                } else if(this.data.myClickedButton == "myStats") {
                  return (
                    <MyStats />
                  );
                } else if(this.data.myClickedButton == "myCardio") {
                  return (
                    <MyCardio />
                  );
                } else if(this.data.myClickedButton == "myWorkout") {
                  return (
                    <MyWorkout />
                  );
                } else if(this.data.myClickedButton == "myTrainer") {
                  return (
                    <MyTrainer />
                  );
                } else {
                  return (
                    <MySchedule />
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