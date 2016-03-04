ResetPassword = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    //Capture the new password
    const newPassword = this.refs.newPassword.value;
    const newPasswordConfirmation = this.refs.newPasswordConfirmation.value;

    //Make sure the passwords match
    if (newPassword != newPasswordConfirmation) {
      Bert.alert("Passwords do not match", 'danger');
      return false;
    }

    if (newPassword == "" || newPassword == null) {
      Bert.alert("Please enter a new password", "danger");
    } else if (newPasswordConfirmation == "" || newPasswordConfirmation == null) {
      Bert.alert("Please confirm your new password", "danger");
    } else {
      //Reset the users password
      Accounts.resetPassword(Session.get('resetPassword'), newPassword, (error) => {
        if (error) {
          Bert.alert(error, 'danger');
        } else {
          Bert.alert("Password successfully changed", 'success');

          //Unset the reset password token
          Session.set('resetPassword', null);

          //Go to the admins home if they are an admin
          if (Roles.userIsInRole(Meteor.userId(), "admin")) {
            FlowRouter.go("/adminHome");
          }

          //Go to the trainer home if they are a trainer
          if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
            FlowRouter.go("/trainerHome");
          }

          //Go to the clients home if they are a client
          if (Roles.userIsInRole(Meteor.userId(), "client")) {
            FlowRouter.go("/clientHome");
          }
        }
      });
    }
  },

  render() {
    const styles = {
      buttonStyle: {
        width: "100%"
      }
    };

    if (Session.get("resetPassword")) {
      return (
        <div className="row">
        <div className="col s12 m6 offset-m3 l6 offset-l3" id="passwordForgotForm">
          <div className="card-panel grey lighten-4 z-depth-2">
            <h2 className="blue-text center">RESET PASSWORD</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col s12 m12 l12">
                  <input type="password" ref="newPassword" className="validate" minLength={2} placeholder="New Password" required />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <input type="password" ref="newPasswordConfirmation" className="validate" minLength={2} placeholder="Confirm New Password" required />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <button className="btn blue white-text waves-effect" style={styles.buttonStyle}>Reset</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      );
    }
  }
});