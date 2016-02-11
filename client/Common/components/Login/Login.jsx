Login = React.createClass({
  componentDidMount() {
    $("#loginForm").validate({
      rules: {
        username: {
          required: true
        },

        password: {
          required: true
        }
      },

      messages: {
        username: {
          required: "Please Enter Your Username"
        },

        password: {
          required: "Please Enter Your Password"
        }
      },

      submitHandler(e) {
        //Capture username and password from form
        let username = $('[name=username]').val();
        let password = $('[name=password]').val();

        //Log user in with userrname and password
        Meteor.loginWithPassword(username, password, (error) => {
          //Invalid login
          if (error) {
            //Pop up an alert to show login failed
            Bert.alert(error.reason, 'danger', 'growl-top-right');
          }
        });

        Accounts.onLogin(() => {
          //Go to the admin home if they are an admin
          if(Roles.userIsInRole(Meteor.userId(), "admin")) {
            FlowRouter.go("/adminHome");
          }

          //Go to the trainer home if they are a trainer
          if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
            FlowRouter.go("/trainerHome");
          }

          //Go to the client home if they are a client
          if(Roles.userIsInRole(Meteor.userId(), "client")) {
            FlowRouter.go("/clientHome");
          }
        });
      }
    });
  },

  handleSubmit(e) {
    e.preventDefault();
  },

  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 l6 offset-l3" id="userLoginForm">
          <div className="card-panel grey lighten-4 z-depth-2">
            <h2 className="blue-text">Sign In</h2>
            <form onSubmit={this.handleSubmit} id="loginForm">
              <div className="row">
              <input type="text" className="validate" name="username" placeholder="Username" />
              </div>
              <div className="row">
              <input type="password" className="validate" name="password" placeholder="Password" />
              </div>
              <div className="row">
              <button className="btn blue">Login</button>
              </div>
            </form>
            <p><a href="/forgotPassword">Forgot Password?</a></p>
          </div>
        </div>
      </div>
    );
  }
});