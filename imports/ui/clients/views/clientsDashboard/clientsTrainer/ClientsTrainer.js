import React from 'react';
import {Roles} from 'meteor/alanning:roles';
import Loading from '../../../../common/components/Loading/Loading.js';

export default class ClientsTrainer extends React.Component {
  render() {
    const styles = {
      textareaHeight: {
        height: 100,
        overflowY: "scroll"
      }
    };

    if(Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if(this.props.loading) {
      return (
        <Loading />
      );
    } else if(Roles.userIsInRole(Meteor.userId(), "client")) {
      return (
        <div className="row">
          <div className="card z-depth-3 grey lighten-4">
            <div className="col s12 m12 l12">
              <div className="card white">
                <div className="blue card-title center-align white-text">MY TRAINER</div>
              </div>
            </div>
            <div className="row">
              <form>
                <div className="col s12">
                  <div className="card">
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">Username:</span>
                        <input type="text" name="username" placeholder="Username" defaultValue={this.props.myTrainer.username} readOnly />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">First Name:</span>
                        <input type="text" name="firstName" placeholder="First Name" minLength={2} defaultValue={this.props.myTrainer.firstName} readOnly />
                      </div>
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">Last Name:</span>
                        <input type="text" name="lastName" placeholder="Last Name" minLength={2} defaultValue={this.props.myTrainer.lastName} readOnly />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">Date Of Birth:</span>
                        <input type="date" name="birthday" id="birthday" placeholder="Date of Birth" defaultValue={this.props.myTrainer.birthday} readOnly />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m3 l3">
                        <span className="blue-text myBoldProfileHeading">Address:</span>
                        <input type="text" name="address" placeholder="Address" defaultValue={this.props.myTrainer.address} readOnly />
                      </div>
                      <div className="input-field col s12 m3 l3">
                        <span className="blue-text myBoldProfileHeading">City:</span>
                        <input type="text" name="city" placeholder="City" defaultValue={this.props.myTrainer.city} readOnly />
                      </div>
                      <div className="input-field col s12 m3 l3">
                        <span className="blue-text myBoldProfileHeading">State:</span>
                        <input type="text" name="state" placeholder="State" defaultValue={this.props.myTrainer.state} readOnly />
                      </div>
                      <div className="input-field col s12 m3 l3">
                        <span className="blue-text myBoldProfileHeading">Zip Code</span>
                        <input type="text" name="zip" placeholder="Zip Code" defaultValue={this.props.myTrainer.zip} readOnly />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m4 l4">
                        <span className="blue-text myBoldProfileHeading">Home Phone:</span>
                        <input type="text" name="homePhone" placeholder="Home Phone" defaultValue={this.props.myTrainer.homePhone} readOnly />
                      </div>
                      <div className="input-field col s12 m4 l4">
                        <span className="blue-text myBoldProfileHeading">Work Phone:</span>
                        <input type="text" name="workPhone" placeholder="Work Phone" defaultValue={this.props.myTrainer.workPhone} readOnly />
                      </div>
                      <div className="input-field col s12 m4 l4">
                        <span className="blue-text myBoldProfileHeading">Emergency Contact:</span>
                        <input type="text" name="emergencyContact" placeholder="Emergency Contact" defaultValue={this.props.myTrainer.emergencyContact} readOnly />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">Email:</span>
                        <input type="text" name="email" placeholder="Email" defaultValue={this.props.myTrainer.emails[0].address} readOnly />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">About You:</span>
                        <textarea name="bio" placeholder="About You" style={styles.textareaHeight} defaultValue={this.props.myTrainer.bio} readOnly></textarea>
                      </div>
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">Fitness Goals:</span>
                        <textarea name="fitnessGoals" placeholder="Fitness Goals" style={styles.textareaHeight} defaultValue={this.props.myTrainer.fitnessGoals} readOnly></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}