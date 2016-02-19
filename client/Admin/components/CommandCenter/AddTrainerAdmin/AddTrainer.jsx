AddTrainer = React.createClass({
  handleSubmit(e) {
    //Prevent default form submission
    e.preventDefault();

    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const email = this.refs.email.value;
    const firstName = this.refs.firstName.value;
    const lastName = this.refs.lastName.value;

    if(firstName == "" || firstName == null) {
      Bert.alert("Please Enter Trainer's First Name", "danger");
    } else if(lastName == "" || lastName == null) {
      Bert.alert("Please Enter Trainer's Last Name", "danger");
    } else if(email == "" || email == null) {
        Bert.alert("Please Enter Trainer's Email", "danger")
    } else {
      //Call server method to create the trainer
      Meteor.call("createTrainer", {username, password, email, firstName, lastName}, (error) => {
        //Error creating trainer
        if (error) {
          //Pop up an alert to show the error
          Bert.alert(error.reason, 'danger');
        } else {
          //Route back to the command center
          FlowRouter.go('/commandCenter');
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

    if(Roles.userIsInRole(Meteor.userId(), "admin")) {
      return (
        <div className="row">
          <div className="col s12 m8 offset-m2 l6 offset-l3" id="registrationForm">
            <div className="card-panel black lighten-4 z-depth-2">
              <h2 className="green-text center">CREATE TRAINER</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col s12 m6 l6">
                    <input type="text" ref="username" className="validate white-text" minLength={2} placeholder="Username" required  />
                  </div>
                  <div className="col s12 m6 l6">
                    <input type="password" ref="password" className="validate white-text" minLength={2} placeholder="Password" required />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m12 l12">
                    <input type="email" ref="email" className="validate white-text" minLength={2} placeholder="Email Address" required />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m6 l6">
                    <input type="text" ref="firstName" className="validate white-text" minLength={2} placeholder="First Name" required />
                  </div>
                  <div className="col s12 m6 l6">
                    <input type="text" ref="lastName" className="validate white-text" minLength={2} placeholder="Last Name" required />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m12 l12">
                    <button type="submit" style={styles.buttonWidth} className="btn green white-text waves-effect">Create Trainer</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
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