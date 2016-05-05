import React from 'react';
import Alert from 'react-s-alert';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default class ForgotPassword extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    // Capture the users email
    const email = this.refs.email.value;

    if (email == '' || email == null) {
      Alert.error('Please enter your email', {
        position: 'top-right',
        effect: 'jelly',
      });
    } else {
      // Send email to user with link to reset password
      Accounts.forgotPassword({
        email: email,
      }, (error) => {
        if (error) {
          Alert.error(error.reason, {
            position: 'top-right',
            effect: 'jelly',
          });
        } else {
          Alert.success('Reset password email has been sent', {
            position: 'top-right',
            effect: 'jelly',
          });
          FlowRouter.go('/');
        }
      });
    }
  }

  render() {
    const styles = {
      buttonStyle: {
        width: '100%',
      },
    };

    return (
      <div className="row">
        <div className="col s12 m6 offset-m3 l6 offset-l3" id="passwordForgotForm">
          <div className="card-panel grey lighten-4 z-depth-2">
            <h2 className="blue-text center">FORGOT PASSWORD</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="col s12 m12 l12">
                  <input type="email" ref="email" className="validate" minLength={2} placeholder="Email Address" required />
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