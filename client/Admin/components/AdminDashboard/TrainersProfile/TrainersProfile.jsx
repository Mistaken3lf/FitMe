TrainersProfile = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const trainerId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("trainersProfile", trainerId);

    return {
      loading: !handle.ready(),

      trainerProfile: Meteor.users.findOne({
        _id: trainerId
      })
    };
  },

  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const trainerId = FlowRouter.getParam('_id');

    Meteor.call("updateTrainersProfile", {
      fieldName, data, trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, "danger");
      }
    });
  },

  handleSubmit(e) {
    e.preventDefault();
  },

  render() {
    if (this.data.loading) {
      return (
        <Loading />
      );
    } else {
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
                    <input type="text" name="username" className="validate" placeholder="Username" defaultValue={this.data.trainerProfile.username} readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m6 l6">
                    <span className="black-text myBoldProfileHeading">First Name:</span>
                    <input type="text" name="firstName" className="validate" placeholder="First Name" minLength={2} onChange={this.updateField} defaultValue={this.data.trainerProfile.firstName} />
                  </div>
                  <div className="input-field col s12 m6 l6">
                    <span className="black-text myBoldProfileHeading">Last Name:</span>
                    <input type="text" name="lastName" className="validate" placeholder="Last Name" minLength={2} onChange={this.updateField} defaultValue={this.data.trainerProfile.lastName} />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m6 l6">
                    <span className="black-text myBoldProfileHeading">Date Of Birth:</span>
                    <input type="date" name="birthday" className="validate" id="birthday" placeholder="Date of Birth" onChange={this.updateField} defaultValue={this.data.trainerProfile.birthday} />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m3 l3">
                    <span className="black-text myBoldProfileHeading">Address:</span>
                    <input type="text" name="address" className="validate" placeholder="Address" onChange={this.updateField} defaultValue={this.data.trainerProfile.address} />
                  </div>
                  <div className="input-field col s12 m3 l3">
                    <span className="black-text myBoldProfileHeading">City:</span>
                    <input type="text" name="city" className="validate" placeholder="City" onChange={this.updateField} defaultValue={this.data.trainerProfile.city} />
                  </div>
                  <div className="input-field col s12 m3 l3">
                    <span className="black-text myBoldProfileHeading">State:</span>
                    <input type="text" name="state" className="validate" placeholder="State" onChange={this.updateField} defaultValue={this.data.trainerProfile.state} />
                  </div>
                  <div className="input-field col s12 m3 l3">
                    <span className="black-text myBoldProfileHeading">Zip Code</span>
                    <input type="text" name="zip" className="validate" placeholder="Zip Code" onChange={this.updateField} defaultValue={this.data.trainerProfile.zip} />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m4 l4">
                    <span className="black-text myBoldProfileHeading">Home Phone:</span>
                    <input type="text" name="homePhone" className="validate" placeholder="Home Phone" onChange={this.updateField} defaultValue={this.data.trainerProfile.homePhone} />
                  </div>
                  <div className="input-field col s12 m4 l4">
                    <span className="black-text myBoldProfileHeading">Work Phone:</span>
                    <input type="text" name="workPhone" className="validate" placeholder="Work Phone" onChange={this.updateField} defaultValue={this.data.trainerProfile.workPhone} />
                  </div>
                  <div className="input-field col s12 m4 l4">
                    <span className="black-text myBoldProfileHeading">Emergency Contact:</span>
                    <input type="text" name="emergencyContact" className="validate" placeholder="Emergency Contact" onChange={this.updateField} defaultValue={this.data.trainerProfile.emergencyContact} />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m6 l6">
                    <span className="black-text myBoldProfileHeading">Email:</span>
                    <input type="text" name="email" className="validate" placeholder="Email" defaultValue={this.data.trainerProfile.emails[0].address} readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m6 l6">
                    <span className="black-text myBoldProfileHeading">About You:</span>
                    <textarea name="bio" placeholder="About You" className="validate" className="materialize-textarea" rows={6} onChange={this.updateField} defaultValue={this.data.trainerProfile.bio}></textarea>
                  </div>
                  <div className="input-field col s12 m6 l6">
                    <span className="black-text myBoldProfileHeading">Fitness Goals:</span>
                    <textarea name="fitnessGoals" className="validate" placeholder="Fitness Goals" className="materialize-textarea" rows={6} onChange={this.updateField} defaultValue={this.data.trainerProfile.fitnessGoals}></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
});