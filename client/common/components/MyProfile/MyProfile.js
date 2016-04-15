import React from 'react';
import Alert from 'react-s-alert';
import {FlowRouter} from 'meteor/kadira:flow-router';
import Loading from '../Loading/Loading.js';
import SuspendedAccount from '../SuspendedAccount/SuspendedAccount.js';

export default class MyProfile extends React.Component {
  componentDidMount() {
    if (!this.props.userProfile && !this.props.loggingIn) {
      FlowRouter.go("/notAuthorized");
      return false;
    }
  }

  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;

    Meteor.call("updateMyProfile", {
      fieldName, data
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
    });
  }

  render() {
    const styles = {
      textareaHeight: {
        height: 100,
        overflowY: "scroll"
      }
    };

    if (this.props.loading) {
      return (
        <Loading />
      );
    } else if (this.props.userProfile.userStatus == "suspended") {
      return (
        <SuspendedAccount />
      );
    } else {
      return (
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card z-depth-3 grey lighten-4">
              <div className="col s12 m12 l12">
                <div className="card white">
                  <div className="blue card-title center-align white-text">MY PROFILE CARD</div>
                </div>
              </div>
              <div className="row">
                <form>
                  <div className="col s12">
                    <div className="card">
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">Username:</span>
                          <input type="text" name="username" placeholder="Username" defaultValue={this.props.userProfile.username} readOnly />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">First Name:</span>
                          <input type="text" name="firstName" className="validate" placeholder="First Name" minLength={2} onChange={this.updateField} defaultValue={this.props.userProfile.firstName} required />
                        </div>
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">Last Name:</span>
                          <input type="text" name="lastName" className="validate" placeholder="Last Name" minLength={2} onChange={this.updateField} defaultValue={this.props.userProfile.lastName} required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">Date Of Birth:</span>
                          <input type="date" name="birthday" className="validate" placeholder="Date of Birth" onChange={this.updateField} defaultValue={this.props.userProfile.birthday} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m3 l3">
                          <span className="blue-text myBoldProfileHeading">Address:</span>
                          <input type="text" name="address" className="validate" placeholder="Address" onChange={this.updateField} defaultValue={this.props.userProfile.address} />
                        </div>
                        <div className="input-field col s12 m3 l3">
                        <span className="blue-text myBoldProfileHeading">City:</span>
                        <input type="text" name="city" className="validate" placeholder="City" onChange={this.updateField} defaultValue={this.props.userProfile.city} />
                        </div>
                        <div className="input-field col s12 m3 l3">
                          <span className="blue-text myBoldProfileHeading">State:</span>
                          <input type="text" name="state" className="validate" placeholder="State" onChange={this.updateField} defaultValue={this.props.userProfile.state} />
                        </div>
                        <div className="input-field col s12 m3 l3">
                          <span className="blue-text myBoldProfileHeading">Zip Code</span>
                          <input type="text" name="zip" className="validate" placeholder="Zip Code" onChange={this.updateField} defaultValue={this.props.userProfile.zip} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m4 l4">
                        <span className="blue-text myBoldProfileHeading">Home Phone:</span>
                          <input type="text" name="homePhone" className="validate" placeholder="Home Phone" onChange={this.updateField} defaultValue={this.props.userProfile.homePhone} />
                        </div>
                        <div className="input-field col s12 m4 l4">
                          <span className="blue-text myBoldProfileHeading">Work Phone:</span>
                          <input type="text" name="workPhone" className="validate" placeholder="Work Phone" onChange={this.updateField} defaultValue={this.props.userProfile.workPhone} />
                        </div>
                        <div className="input-field col s12 m4 l4">
                          <span className="blue-text myBoldProfileHeading">Emergency Contact:</span>
                          <input type="text" name="emergencyContact" className="validate" placeholder="Emergency Contact" onChange={this.updateField} defaultValue={this.props.userProfile.emergencyContact} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">Email:</span>
                          <input type="email" name="email" placeholder="Email" defaultValue={this.props.userProfile.emails[0].address} readOnly />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">About You:</span>
                          <textarea name="bio" placeholder="About You" style={styles.textareaHeight} onChange={this.updateField} defaultValue={this.props.userProfile.bio}></textarea>
                        </div>
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">Fitness Goals:</span>
                          <textarea name="fitnessGoals" style={styles.textareaHeight} placeholder="Fitness Goals" onChange={this.updateField} defaultValue={this.props.userProfile.fitnessGoals}></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}