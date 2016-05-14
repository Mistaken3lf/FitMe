import React from 'react';
import {Roles} from 'meteor/alanning:roles';
import {FlowRouter} from 'meteor/kadira:flow-router';
import MyTrainer from '../../containers/myTrainer.js';
import MySchedule from '../../containers/mySchedule.js';
import Loading from '../../../common/components/Loading/Loading.js';

export default class ClientDashboard extends React.Component {
  componentDidMount() {
    if (!Roles.userIsInRole(Meteor.userId(), 'client') && !Meteor.loggingIn()) {
      FlowRouter.go('/notAuthorized');
      return false;
    }
  }

  handleClick(e) {
    // Set the active template based on button clicked on dashboard
    let clickedButton = e.target.id;
    Session.set('myClickedButton', clickedButton);
  }

  updateProfilePic() {
    let profilePic = this.refs.profilePicture.files;

    if (profilePic && profilePic[0]) {
      let fileReader = new FileReader();

      fileReader.onload = (data) => {
        let picture = data.target.result;
        Meteor.call('updateMyProfilePicture', {
          picture,
        });
      };

      fileReader.readAsDataURL(profilePic[0]);
    }
  }

  render() {
    if (this.props.loggingIn) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), 'client')) {
      return (
        <div>
          <div className="row">
            <div className="col s6 m6 l3 offset-s3 offset-m3 offset-l3">
              {(() => {
                if(this.props.currentClient.profilePicture == '' || this.props.currentClient.profilePicture == null) {
                  return (
                    <img className="circle responsive-img profilePic" src="/Dashboard/Profile/profilePicture.jpg" />
                  );
                } else {
                  return (
                    <img className="circle responsive-img profilePic" src={this.props.currentClient.profilePicture} />
                  );
                }
              })()}
            </div>
            <div className="col s12 m12 l4">
              <h5 className="center blue-text trainerViewDashNameText"><b>{this.props.currentClient.firstName} {this.props.currentClient.lastName}</b></h5>
              <h5 className="center blue-text trainerViewDashboardText">DASHBOARD</h5>
              <br />
              <div className="file-field input-field">
                <div className="btn blue white-text">
                  <span>Upload</span>
                  <input type="file" ref="profilePicture" onChange={this.updateProfilePic.bind(this)} />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" placeholder="Upload profile picture" />
                </div>
              </div>
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
                if(this.props.myClickedButton == 'mySession') {
                  return (
                    <MySchedule />
                  );
                } else if(this.props.myClickedButton == 'myStats') {
                  return (
                    <MyStats />
                  );
                } else if(this.props.myClickedButton == 'myCardio') {
                  return (
                    <MyCardio />
                  );
                } else if(this.props.myClickedButton == 'myWorkout') {
                  return (
                    <MyWorkout />
                  );
                } else if(this.props.myClickedButton == 'myTrainer') {
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
    }
  }
}