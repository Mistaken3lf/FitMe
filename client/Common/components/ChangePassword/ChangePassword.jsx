ChangePassword = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    //Capture the new and old passwords
    const currentPassword = this.refs.currentPassword.value;
    const newPassword = this.refs.newPassword.value;
    const newPasswordConfirmation = this.refs.newPasswordConfirmation.value;

    if (newPassword != newPasswordConfirmation) {
      Bert.alert("Passwords do not match", 'danger');
      return false;
    }

    Accounts.changePassword(currentPassword, newPassword, (error) => {
      //Invalid passwords
      if (error) {
        //Pop up an alert to show the error
        Bert.alert(error.reason, 'danger');
      } else {
        //Go to the admin home if they are an admin
        if(Roles.userIsInRole(Meteor.userId(), "admin")) {
          FlowRouter.go("/adminHome");
          Bert.alert("Password successfully changed", 'success');
        }

        //Go to the trainers home if they are a trainer
        if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
          FlowRouter.go("/trainerHome");
          Bert.alert("Password successfully changed", 'success');
        }

        //Go to the clients home if they are a client
        if(Roles.userIsInRole(Meteor.userId(), "client")) {
          FlowRouter.go("/clientHome");
          Bert.alert("Password successfully changed", 'success');
        }
      }
    });
  },

  render() {
    const styles = {
      buttonStyle: {
        width: "100%"
      }
    };

    if(Meteor.user()) {
      return (
        <div className="row">
          <div className="col s12 m8 offset-m2 l6 offset-l3" id="passwordChangeForm">
            <div className="card-panel grey lighten-4 z-depth-2">
              <h2 className="blue-text center">CHANGE PASSWORD</h2>
              <form onSubmit={this.handleSubmit} id="changePasswordForm">
                <div className="row">
                  <div className="col s12 m12 l12">
                    <input type="password" ref="currentPassword" placeholder="Current Password" className="validate" />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m12 l12">
                    <input type="password" ref="newPassword" placeholder="New Password" className="validate" />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m12 l12">
                    <input type="password" ref="newPasswordConfirmation" placeholder="Confirm New Password" className="validate" />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m12 l12">
                    <button type="submit" style={styles.buttonStyle} className="btn blue white-text waves-effect">Change Password</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }

    if(Meteor.loggingIn()) {
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