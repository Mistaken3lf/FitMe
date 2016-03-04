Register = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    const firstName = this.refs.firstName.value;
    const lastName = this.refs.lastName.value;
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const email = this.refs.email.value;

    if (username == "" || username == null) {
      Bert.alert("Please enter a username", "danger");
    } else if (password == "" || password == null) {
      Bert.alert("Please enter a password", "danger");
    } else if (firstName == "" || firstName == null) {
      Bert.alert("Please Enter Your First Name", "danger");
    } else if (lastName == "" || lastName == null) {
      Bert.alert("Please Enter Your Last Name", "danger");
    } else if (email == "" || email == null) {
      Bert.alert("Please Enter An Email", "danger")
    } else {
      //Call server method to register the trainer
      Meteor.call("registerTrainer", {
        username, password, email, firstName, lastName
      }, (error) => {
        //Error registering trainer
        if (error) {
          //Pop up an alert to show the error
          Bert.alert(error.reason, 'danger');
        } else {
          //Login user with provided credentials
          Meteor.loginWithPassword(username, password, (error) => {
            //Failed to login
            if (error) {
              //Pop up an alert to show the reason for failed login
              Bert.alert(error.reason, 'danger');
            } else {
              Bert.alert("Welcome To FitMe", "success");
              FlowRouter.go('/trainerHome');
            }
          });
        }
      });
    }
  },

  render() {
    const styles = {
      buttonWidth: {
        width: "100%"
      }
    };

    return (
      <div className="row">
    <div className="col s12 m8 offset-m2 l6 offset-l3" id="registrationForm">
      <div className="card-panel grey lighten-4 z-depth-2">
        <h2 className="blue-text center">REGISTER</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12 m6 l6">
              <input type="text" ref="username" className="validate" minLength={2} placeholder="Username" required  />
            </div>
            <div className="col s12 m6 l6">
              <input type="password" ref="password" className="validate" minLength={2} placeholder="Password" required />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              <input type="email" ref="email" className="validate" minLength={2} placeholder="Email Address" required />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 l6">
              <input type="text" ref="firstName" className="validate" minLength={2} placeholder="First Name" required />
            </div>
            <div className="col s12 m6 l6">
              <input type="text" ref="lastName" className="validate" minLength={2} placeholder="Last Name" required />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              <button type="submit" style={styles.buttonWidth} className="btn blue white-text waves-effect">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
  }
});