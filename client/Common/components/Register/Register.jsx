Register = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    firstName = this.refs.firstName.value;
    lastName = this.refs.lastName.value;
    username = this.refs.username.value;
    password = this.refs.password.value;
    email = this.refs.email.value;


    //Call server method to register the trainer
    Meteor.call("registerTrainer", {username, password, email, firstName, lastName}, (error) => {
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
          <form onSubmit={this.handleSubmit} id="registerForm">
            <div className="row">
              <div className="col s12 m6 l6">
                <input type="text" ref="username" className="validate" placeholder="Username" required />
              </div>
              <div className="col s12 m6 l6">
                <input type="password" ref="password" className="validate" placeholder="Password" required />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                <input type="email" ref="email" className="validate" placeholder="Email Address" required />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6 l6">
                <input type="text" ref="firstName" className="validate" placeholder="First Name" required />
              </div>
              <div className="col s12 m6 l6">
                <input type="text" ref="lastName" className="validate" placeholder="Last Name" required />
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