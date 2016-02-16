MyProfile = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("myProfile");

    return {
      loading: !handle.ready(), // Use handle to show loading state
      userProfile: Meteor.users.findOne({
        _id: Meteor.userId()
      })
    };
  },

  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;

    Meteor.call("updateMyProfile", {fieldName, data}, (error) => {
      if(error) {
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
    } else if (Meteor.user()) {
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
                <form id="myProfileForm" onSubmit={this.handleSubmit}>
                  <div className="col s12">
                    <div className="card">
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">Username:</span>
                          <input type="text" name="username" placeholder="Username" defaultValue={this.data.userProfile.username} readOnly />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">First Name:</span>
                          <input type="text" name="firstName" placeholder="First Name" onChange={this.updateField} defaultValue={this.data.userProfile.firstName} />
                        </div>
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">Last Name:</span>
                          <input type="text" name="lastName" placeholder="Last Name" onChange={this.updateField} defaultValue={this.data.userProfile.lastName} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">Date Of Birth:</span>
                          <input type="date" name="birthday" id="birthday" placeholder="Date of Birth" onChange={this.updateField} defaultValue={this.data.userProfile.birthday} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m3 l3">
                          <span className="blue-text myBoldProfileHeading">Address:</span>
                          <input type="text" name="address" placeholder="Address" onChange={this.updateField} defaultValue={this.data.userProfile.address} />
                        </div>
                        <div className="input-field col s12 m3 l3">
                        <span className="blue-text myBoldProfileHeading">City:</span>
                        <input type="text" name="city" placeholder="City" onChange={this.updateField} defaultValue={this.data.userProfile.city} />
                        </div>
                        <div className="input-field col s12 m3 l3">
                          <span className="blue-text myBoldProfileHeading">State:</span>
                          <input type="text" name="state" placeholder="State" onChange={this.updateField} defaultValue={this.data.userProfile.state} />
                        </div>
                        <div className="input-field col s12 m3 l3">
                          <span className="blue-text myBoldProfileHeading">Zip Code</span>
                          <input type="text" name="zip" placeholder="Zip Code" onChange={this.updateField} defaultValue={this.data.userProfile.zip} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m4 l4">
                        <span className="blue-text myBoldProfileHeading">Home Phone:</span>
                          <input type="text" name="homePhone" placeholder="Home Phone" onChange={this.updateField} defaultValue={this.data.userProfile.homePhone} />
                        </div>
                        <div className="input-field col s12 m4 l4">
                          <span className="blue-text myBoldProfileHeading">Work Phone:</span>
                          <input type="text" name="workPhone" placeholder="Work Phone" onChange={this.updateField} defaultValue={this.data.userProfile.workPhone} />
                        </div>
                        <div className="input-field col s12 m4 l4">
                          <span className="blue-text myBoldProfileHeading">Emergency Contact:</span>
                          <input type="text" name="emergencyContact" placeholder="Emergency Contact" onChange={this.updateField} defaultValue={this.data.userProfile.emergencyContact} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">Email:</span>
                          <input type="text" name="email" placeholder="Email" defaultValue={this.data.userProfile.emails[0].address} readOnly />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">About You:</span>
                          <textarea name="bio" placeholder="About You" className="materialize-textarea" rows={6} onChange={this.updateField} defaultValue={this.data.userProfile.bio}></textarea>
                        </div>
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text myBoldProfileHeading">Fitness Goals:</span>
                          <textarea name="fitnessGoals" placeholder="Fitness Goals" className="materialize-textarea" rows={6} onChange={this.updateField} defaultValue={this.data.userProfile.fitnessGoals}></textarea>
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
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
});