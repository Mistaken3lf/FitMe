import React from 'react';
import Alert from 'react-s-alert';

export default class TrainersProfile extends React.Component {
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const trainerId = FlowRouter.getParam('_id');

    Meteor.call("updateTrainersProfile", {
      fieldName, data, trainerId
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const styles = {
      textareaHeight: {
        height: 100,
        overflowY: "scroll"
      }
    };

    return (
      <div className="card">
        <div className="col s12 m12 l12">
          <div className="card white">
            <div className="black card-title center-align white-text">TRAINERS PROFILE</div>
          </div>
        </div>
        <div className="row">
          <form id="myProfileForm" onSubmit={this.handleSubmit}>
            <div className="col s12">
              <div className="row">
                <div className="input-field col s12 m6 l6">
                  <span className="black-text myBoldProfileHeading">Username:</span>
                  <input type="text" name="username" className="validate" placeholder="Username" defaultValue={this.props.trainerData.username} readOnly />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6 l6">
                  <span className="black-text myBoldProfileHeading">First Name:</span>
                  <input type="text" name="firstName" className="validate" placeholder="First Name" minLength={2} onChange={this.updateField} defaultValue={this.props.trainerData.firstName} />
                </div>
                <div className="input-field col s12 m6 l6">
                  <span className="black-text myBoldProfileHeading">Last Name:</span>
                  <input type="text" name="lastName" className="validate" placeholder="Last Name" minLength={2} onChange={this.updateField} defaultValue={this.props.trainerData.lastName} />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6 l6">
                  <span className="black-text myBoldProfileHeading">Date Of Birth:</span>
                  <input type="date" name="birthday" className="validate" placeholder="Date of Birth" onChange={this.updateField} defaultValue={this.props.trainerData.birthday} />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m3 l3">
                  <span className="black-text myBoldProfileHeading">Address:</span>
                  <input type="text" name="address" className="validate" placeholder="Address" onChange={this.updateField} defaultValue={this.props.trainerData.address} />
                </div>
                <div className="input-field col s12 m3 l3">
                  <span className="black-text myBoldProfileHeading">City:</span>
                  <input type="text" name="city" className="validate" placeholder="City" onChange={this.updateField} defaultValue={this.props.trainerData.city} />
                </div>
                <div className="input-field col s12 m3 l3">
                  <span className="black-text myBoldProfileHeading">State:</span>
                  <input type="text" name="state" className="validate" placeholder="State" onChange={this.updateField} defaultValue={this.props.trainerData.state} />
                </div>
                <div className="input-field col s12 m3 l3">
                  <span className="black-text myBoldProfileHeading">Zip Code</span>
                  <input type="text" name="zip" className="validate" placeholder="Zip Code" onChange={this.updateField} defaultValue={this.props.trainerData.zip} />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m4 l4">
                  <span className="black-text myBoldProfileHeading">Home Phone:</span>
                  <input type="text" name="homePhone" className="validate" placeholder="Home Phone" onChange={this.updateField} defaultValue={this.props.trainerData.homePhone} />
                </div>
                <div className="input-field col s12 m4 l4">
                  <span className="black-text myBoldProfileHeading">Work Phone:</span>
                  <input type="text" name="workPhone" className="validate" placeholder="Work Phone" onChange={this.updateField} defaultValue={this.props.trainerData.workPhone} />
                </div>
                <div className="input-field col s12 m4 l4">
                  <span className="black-text myBoldProfileHeading">Emergency Contact:</span>
                  <input type="text" name="emergencyContact" className="validate" placeholder="Emergency Contact" onChange={this.updateField} defaultValue={this.props.trainerData.emergencyContact} />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6 l6">
                  <span className="black-text myBoldProfileHeading">Email:</span>
                  <input type="text" name="email" className="validate" placeholder="Email" defaultValue={this.props.trainerData.emails[0].address} readOnly />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6 l6">
                  <span className="black-text myBoldProfileHeading">About You:</span>
                  <textarea name="bio" placeholder="About You" style={styles.textareaHeight} onChange={this.updateField} defaultValue={this.props.trainerData.bio}></textarea>
                </div>
                <div className="input-field col s12 m6 l6">
                  <span className="black-text myBoldProfileHeading">Fitness Goals:</span>
                  <textarea name="fitnessGoals" style={styles.textareaHeight} placeholder="Fitness Goals" onChange={this.updateField} defaultValue={this.props.trainerData.fitnessGoals}></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}