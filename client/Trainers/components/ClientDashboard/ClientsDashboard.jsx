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

  updateProfilePic() {
    let profilePic = this.refs.profilePicture.files;
    const clientId = FlowRouter.getParam('_id');

    if (profilePic && profilePic[0]) {
      let fileReader = new FileReader();

      fileReader.onload = (data) => {
        let picture = data.target.result;
        Meteor.call("updateClientsProfilePicture", {
          picture,
          clientId
        });
      }

      fileReader.readAsDataURL(profilePic[0]);
    }
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
        <div>
          <div className="row">
            <div className="circle col s6 m6 l3 offset-s3 offset-m3 offset-l3">
              {(() => {
                if(this.data.myClient.profilePicture == "" || this.data.myClient.profilePicture == null) {
                  return (
                    <img className="circle responsive-img profilePic" src="/Dashboard/Profile/profilePicture.jpg" />
                  );
                } else {
                  return (
                    <img className="circle responsive-img profilePic" src={this.data.myClient.profilePicture} />
                  );
                }
              })()}
            </div>
            <div className="col s12 m12 l4">
              <h5 className="center blue-text trainerViewDashNameText"><b>{this.data.myClient.firstName} {this.data.myClient.lastName}</b></h5>
              <h5 className="center blue-text trainerViewDashboardText">DASHBOARD</h5>
              <br />
              <div className="file-field input-field">
                <div className="btn blue white-text">
                  <span>Upload</span>
                  <input type="file" ref="profilePicture" onChange={this.updateProfilePic} />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" placeholder="Upload profile picture" />
                </div>
              </div>
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