Register = React.createClass({
  componentDidMount() {
    $("#registerForm").validate({
      rules: {
        username: {
          required: true
        },

        password: {
          required: true
        },

        email: {
          required: true
        },

        firstName: {
          required: true
        },

        lastName: {
          required: true
        }
      },

      messages: {
        username: {
          required: "Please Enter Your Username"
        },

        password: {
          required: "Please Enter Your Password"
        },

        email: {
          required: "Please Enter Your Email"
        },

        firstName: {
          required: "Please Enter Your First Name"
        },

        lastName: {
          required: "Please Enter Your Last name"
        }
      },

      submitHandler() {
        //Get the first and last name, username, password and email from form
        let newTrainerData = {
          //Get who send the message and the actual message
          firstName: $('[name=firstName]').val(),
          lastName: $('[name=lastName]').val(),
          username: $('[name=username]').val(),
          password: $('[name=password]').val(),
          email: $('[name=email]').val(),
        };

        //Call server method to register the trainer
        Meteor.call("registerTrainer", newTrainerData, (error) => {
          //Error registering trainer
          if (error) {
            //Pop up an alert to show the error
            Bert.alert(error.reason, 'danger', 'growl-top-right');
          } else {
            //Login user with provided credentials
            Meteor.loginWithPassword(newTrainerData.username, newTrainerData.password, (error) => {

              //Failed to login
              if (error) {
                //Pop up an alert to show the reason for failed login
                Bert.alert(error.reason, 'danger', 'growl-top-right');
              } else {
                //Route the newly logged in user home
                FlowRouter.go('/trainerHome');
              }
            });
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
                  <input type="text" name="username" placeholder="Username" />
                </div>
                <div className="col s12 m6 l6">
                  <input type="text" name="password" placeholder="Password" />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <input type="email" name="email" placeholder="Email Address" />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 l6">
                  <input type="text" name="firstName" placeholder="First Name" />
                </div>
                <div className="col s12 m6 l6">
                  <input type="text" name="lastName" placeholder="Last Name" />
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