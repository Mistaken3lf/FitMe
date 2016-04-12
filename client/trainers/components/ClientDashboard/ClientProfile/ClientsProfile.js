import React from 'react';
import Alert from 'react-s-alert';
import Loading from '../../../../common/components/Loading/Loading.js';
import NotAuthorized from '../../../../common/components/NotAuthorized/NotAuthorized.js';

ClientsProfile = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const clientId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("currentClientsProfile", clientId);

    return {
      loading: !handle.ready(),

      currentClient: Meteor.users.findOne({
        whosProfile: clientId
      })
    };
  },

  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call("updateClientsProfile", {
      fieldName, data, clientId
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
    });
  },

  render() {
    const styles = {
      textareaHeight: {
        height: 100,
        overflowY: "scroll"
      }
    };

    if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (this.data.loading) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <div className="row">
          <div className="card z-depth-3 grey lighten-4">
            <div className="col s12 m12 l12">
              <div className="card white">
                <div className="blue card-title center-align white-text">CLIENT PROFILE CARD</div>
              </div>
            </div>
            <div className="row">
              <form>
                <div className="col s12">
                  <div className="card">
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">Username:</span>
                        <input type="text" name="username" className="validate" placeholder="Username" defaultValue={this.data.currentClient.username} readOnly />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">First Name:</span>
                        <input type="text" name="firstName" className="validate" placeholder="First Name" minLength={2} onChange={this.updateField} defaultValue={this.data.currentClient.firstName} required />
                      </div>
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">Last Name:</span>
                        <input type="text" name="lastName" className="validate" placeholder="Last Name" minLength={2} onChange={this.updateField} defaultValue={this.data.currentClient.lastName} required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">Date Of Birth:</span>
                        <input type="date" name="birthday" className="validate" id="birthday" placeholder="Date of Birth" onChange={this.updateField} defaultValue={this.data.currentClient.birthday} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m3 l3">
                        <span className="blue-text myBoldProfileHeading">Address:</span>
                        <input type="text" name="address" className="validate" placeholder="Address" onChange={this.updateField} defaultValue={this.data.currentClient.address} />
                      </div>
                      <div className="input-field col s12 m3 l3">
                      <span className="blue-text myBoldProfileHeading">City:</span>
                      <input type="text" name="city" className="validate" placeholder="City" onChange={this.updateField} defaultValue={this.data.currentClient.city} />
                      </div>
                      <div className="input-field col s12 m3 l3">
                        <span className="blue-text myBoldProfileHeading">State:</span>
                        <input type="text" name="state" className="validate" placeholder="State" onChange={this.updateField} defaultValue={this.data.currentClient.state} />
                      </div>
                      <div className="input-field col s12 m3 l3">
                        <span className="blue-text myBoldProfileHeading">Zip Code</span>
                        <input type="text" name="zip" className="validate" placeholder="Zip Code" onChange={this.updateField} defaultValue={this.data.currentClient.zip} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m4 l4">
                      <span className="blue-text myBoldProfileHeading">Home Phone:</span>
                        <input type="text" name="homePhone" className="validate" placeholder="Home Phone" onChange={this.updateField} defaultValue={this.data.currentClient.homePhone} />
                      </div>
                      <div className="input-field col s12 m4 l4">
                        <span className="blue-text myBoldProfileHeading">Work Phone:</span>
                        <input type="text" name="workPhone" className="validate" placeholder="Work Phone" onChange={this.updateField} defaultValue={this.data.currentClient.workPhone} />
                      </div>
                      <div className="input-field col s12 m4 l4">
                        <span className="blue-text myBoldProfileHeading">Emergency Contact:</span>
                        <input type="text" name="emergencyContact" className="validate" placeholder="Emergency Contact" onChange={this.updateField} defaultValue={this.data.currentClient.emergencyContact} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">Email:</span>
                        <input type="text" name="email" className="validate" placeholder="Email" defaultValue={this.data.currentClient.emails[0].address} readOnly />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">About You:</span>
                        <textarea name="bio" style={styles.textareaHeight} placeholder="About You" onChange={this.updateField} defaultValue={this.data.currentClient.bio}></textarea>
                      </div>
                      <div className="input-field col s12 m6 l6">
                        <span className="blue-text myBoldProfileHeading">Fitness Goals:</span>
                        <textarea name="fitnessGoals" style={styles.textareaHeight} placeholder="Fitness Goals" onChange={this.updateField} defaultValue={this.data.currentClient.fitnessGoals}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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