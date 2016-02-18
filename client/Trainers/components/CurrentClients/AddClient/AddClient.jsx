AddClient = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    //Get the client data from the form
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const email = this.refs.email.value;
    const firstName = this.refs.firstName.value;
    const lastName = this.refs.lastName.value;
    const birthday = this.refs.birthday.value;
    const address = this.refs.address.value;
    const city = this.refs.city.value;
    const state = this.refs.state.value;
    const zip = this.refs.zip.value;
    const homePhone = this.refs.homePhone.value;
    const workPhone = this.refs.workPhone.value;
    const emergencyContact = this.refs.emergencyContact.value;
    const bio = this.refs.bio.value;
    const fitnessGoals = this.refs.fitnessGoals.value;

    if(firstName == "" || firstName == null) {
      Bert.alert("Please Enter Your First Name", "danger");
    } else if(email == "" || email == null) {
      Bert.alert("Please Enter Your Email", "danger");
    } else if(lastName == "" || lastName == null) {
      Bert.alert("Please Enter Your Last Name", "danger");
    } else {
      //Call server method createClient with provided info
      Meteor.call("registerClient", { username, password, email, firstName, lastName, birthday, address, city, state, zip, homePhone, workPhone, emergencyContact, bio, fitnessGoals }, (error, result) => {
        //Create client failed
        if (error) {
          //Popup a toast to display reason for error
          Bert.alert(error.reason, 'danger');
        } else {
          //Go back to my current clients after adding one
          FlowRouter.go("/currentClients");

          if (result) {
            Bert.alert(result, 'danger');

          } else {
            Bert.alert("Client Added", 'success');
          }
        }
      });
    }
  },

  render() {
    if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <img className="responsive-img" id="pageHeader" src="/currentClients/fitMeClientManagement.png" />
            <hr className="headerSeperator" />
          </div>
          <div className="layoutContainer">
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="card z-depth-1 grey lighten-4">
                  <div className="col s12 m12 l12">
                    <div className="card z-depth-1">
                      <div className="card-title blue center-align white-text">REGISTER CLIENT CARD</div>
                    </div>
                  </div>
                  <div className="col s12 m12 l12">
                    <div className="card">
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text boldProfileHeading">Username:</span>
                          <input type="text" className="validate" ref="username" placeholder="jsmith" required />
                        </div>
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text boldProfileHeading">Password:</span>
                          <input type="password" className="validate" ref="password" placeholder="secret password" required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text boldProfileHeading">First Name:</span>
                          <input type="text" className="validate" ref="firstName" placeholder="John" required />
                        </div>
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text boldProfileHeading">Last Name:</span>
                          <input type="text" className="validate" ref="lastName" placeholder="Smith" required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text boldProfileHeading">Email:</span>
                          <input type="email" className="validate" ref="email" placeholder="email@address.com" required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text boldProfileHeading">Birthday:</span>
                          <input type="date" className="validate" ref="birthday" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m3 l3">
                          <span className="blue-text boldProfileHeading">Address:</span>
                          <input type="text" className="validate" ref="address" placeholder="1234 FitMe Dr." />
                        </div>
                        <div className="input-field col s12 m3 l3">
                          <span className="blue-text boldProfileHeading">City:</span>
                          <input type="text" className="validate" ref="city" placeholder="FitCity" />
                        </div>
                        <div className="input-field col s12 m3 l3">
                          <span className="blue-text boldProfileHeading">State:</span>
                          <input type="text" className="validate" ref="state" placeholder="OH" />
                        </div>
                        <div className="input-field col s12 m3 l3">
                          <span className="blue-text boldProfileHeading">Zip:</span>
                          <input type="text" className="validate" ref="zip" placeholder="12345" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m4 l4">
                          <span className="blue-text boldProfileHeading">Home Phone:</span>
                          <input type="text" className="validate" ref="homePhone" placeholder="123-456-7890" />
                        </div>
                        <div className="input-field col s12 m4 l4">
                          <span className="blue-text boldProfileHeading">Work Phone:</span>
                          <input type="text" className="validate" ref="workPhone" placeholder="123-456-7890" />
                        </div>
                        <div className="input-field col s12 m4 l4">
                          <span className="blue-text boldProfileHeading">Emergency Contact #:</span>
                          <input type="text" className="validate" ref="emergencyContact" placeholder="123-456-7890" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text boldProfileHeading">Biography:</span>
                          <textarea type="text" className="materialize-textarea validate" ref="bio" rows={6} placeholder="Tell us about yourself"></textarea>
                        </div>
                        <div className="input-field col s12 m6 l6">
                          <span className="blue-text boldProfileHeading">Fitness Goals</span>
                          <textarea type="text" className="materialize-textarea validate" ref="fitnessGoals" rows={6} placeholder="What do you want to accomplish?"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button className="btn blue waves-effect createClient" type="submit">Create Client</button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      );
    } else if(Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
});