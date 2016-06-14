import React from 'react';
import Alert from 'react-s-alert';
import {Meteor} from 'meteor/meteor';

export default class Login extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    //Capture username and password from form
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    if (username == "" || username == null) {
      Alert.error("Please enter your username", {
        position: 'top-right',
        effect: 'jelly'
      });
    } else if (password == "" || password == null) {
      Alert.error("Please enter your password", {
        position: 'top-right',
        effect: 'jelly'
      });
    } else {
      //Log user in with userrname and password
      Meteor.loginWithPassword(username, password, (error) => {
        //Invalid login
        if (error) {
          //Pop up an alert to show login failed
          Alert.error(error.reason, {
            position: 'top-right',
            effect: 'jelly'
          });
        }
      });
    }
  }

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
            <form onSubmit={this.handleSubmit.bind(this)}>
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
}
