ChangePassword = React.createClass({
  componentDidMount() {
    $("#changePasswordForm").validate({
      rules: {
        currentPassword: {
          required: true
        },

        newPassword: {
          required: true
        },

        newPasswordConfirmation: {
          required: true
        }
      },

      messages: {
        currentPassword: {
          required: "Please Enter Your Current Password"
        },

        newPassword: {
          required: "Please Enter Your New Password"
        },

        newPasswordConfirmation: {
          required: "Please Confirm Your New Password"
        }
      },

      submitHandler() {
        //Capture the new and old passwords
        let currentPassword = $('[name=currentPassword]').val();
        let newPassword = $('[name=newPassword]').val();
        let newPasswordConfirmation = $('[name=newPasswordConfirmation]').val();

        if (newPassword != newPasswordConfirmation) {
          Bert.alert("Passwords do not match", 'danger', 'growl-top-right');
          return false;
        }

        Accounts.changePassword(currentPassword, newPassword, (error) => {
          //Invalid passwords
          if (error) {
            //Pop up an alert to show the error
            Bert.alert(error.reason, 'danger', 'growl-top-right');
          } else {
            //Go to the admin home if they are an admin
            if(Roles.userIsInRole(Meteor.userId(), "admin")) {
              FlowRouter.go("/adminHome");
            }

            //Go to the trainers home if they are a trainer
            if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
              FlowRouter.go("/trainerHome");
            }

            //Go to the clients home if they are a client
            if(Roles.userIsInRole(Meteor.userId(), "client")) {
              FlowRouter.go("/clientHome");
            }
          }
        });
      }
    });
  },

  handleSubmit(e) {
    e.preventDefault();
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
                    <input type="password" name="currentPassword" placeholder="Current Password" />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m12 l12">
                    <input type="password" name="newPassword" placeholder="New Password" />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m12 l12">
                    <input type="password" name="newPasswordConfirmation" placeholder="Confirm New Password" />
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