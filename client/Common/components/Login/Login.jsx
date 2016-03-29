import React from 'react';

Login = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    //Capture username and password from form
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    if (username == "" || username == null) {
      Bert.alert("Please enter your username", "danger");
    } else if (password == "" || password == null) {
      Bert.alert("Please enter your password", "danger");
    } else {
      //Log user in with userrname and password
      Meteor.loginWithPassword(username, password, (error) => {
        //Invalid login
        if (error) {
          //Pop up an alert to show login failed
          Bert.alert(error.reason, 'danger');
        }
      });

      Accounts.onLogin(() => {
        Meteor.call("setLoginStatus");
        
        //Go to the admin home if they are an admin
        if (Roles.userIsInRole(Meteor.userId(), "admin")) {
          FlowRouter.go("/adminHome");
        }

        //Go to the trainer home if they are a trainer
        if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
          FlowRouter.go("/trainerHome");
        }

        //Go to the client home if they are a client
        if (Roles.userIsInRole(Meteor.userId(), "client")) {
          FlowRouter.go("/clientHome");
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

    return (
      <div className="row">
      <div className="col s12 m8 offset-m2 l6 offset-l3" id="userLoginForm">
        <div className="card-panel grey lighten-4 z-depth-2">
          <h2 className="blue-text center">SIGN IN</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12 m12 l12 input-field">
                <input type="text" className="validate" ref="username" minLength={2} placeholder="Username" required />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12 input-field">
                <input type="password" className="validate" ref="password" minLength={2} placeholder="Password" required />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                <button className="btn blue waves-effect" style={styles.buttonStyle}>Login</button>
                <p><a href="/forgotPassword">Forgot Password?</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
});