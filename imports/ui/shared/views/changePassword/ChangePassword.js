import React from 'react';
import Alert from 'react-s-alert';
import { Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Roles } from 'meteor/alanning:roles';

export default class ChangePassword extends React.Component {
  componentDidMount() {
    if (!Meteor.user() && !Meteor.loggingIn()) {
      FlowRouter.go('/notAuthorized');
      return false;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    // Capture the new and old passwords
    const currentPassword = this.refs.currentPassword.value;
    const newPassword = this.refs.newPassword.value;
    const newPasswordConfirmation = this.refs.newPasswordConfirmation.value;

    if (newPassword != newPasswordConfirmation) {
      Alert.error('Passwords do not match!', {
        position: 'top-right',
        effect: 'jelly',
      });
      return false;
    }

    if (currentPassword == '' || currentPassword == null) {
      Alert.error('Please enter your current password', {
        position: 'top-right',
        effect: 'jelly',
      });
    } else if (newPassword == '' || newPassword == null) {
      Alert.error('Please enter a new password', {
        position: 'top-right',
        effect: 'jelly',
      });
    } else if (newPasswordConfirmation == '' || newPasswordConfirmation == null) {
      Alert.error('Please confirm your new password', {
        position: 'top-right',
        effect: 'jelly',
      });
    } else {
      Accounts.changePassword(currentPassword, newPassword, (error) => {
        // Invalid passwords
        if (error) {
          // Pop up an alert to show the error
          Alert.error(error.reason, {
            position: 'top-right',
            effect: 'jelly',
          });
        } else {
          // Go to the admin home if they are an admin
          if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            FlowRouter.go('/adminHome');
            Alert.success('Password successfully changed', {
              position: 'top-right',
              effect: 'jelly',
            });
          }

          // Go to the trainers home if they are a trainer
          if (Roles.userIsInRole(Meteor.userId(), 'trainer')) {
            FlowRouter.go('/trainerHome');
            Alert.success('Password successfully changed', {
              position: 'top-right',
              effect: 'jelly',
            });
          }

          // Go to the clients home if they are a client
          if (Roles.userIsInRole(Meteor.userId(), 'client')) {
            FlowRouter.go('/clientHome');
            Alert.success('Password successfully changed', {
              position: 'top-right',
              effect: 'jelly',
            });
          }
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
        <div className="col s12 m8 offset-m2 l6 offset-l3" id="passwordChangeForm">
          <div className="card-panel grey lighten-4 z-depth-2">
            <h2 className="blue-text center">CHANGE PASSWORD</h2>
            <form onSubmit={() => this.handleSubmit} id="changePasswordForm">
              <div className="row">
                <div className="col s12 m12 l12">
                  <input
                    type="password"
                    ref="currentPassword"
                    placeholder="Current Password"
                    minLength={2}
                    className="validate"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <input
                    type="password"
                    ref="newPassword"
                    placeholder="New Password"
                    minLength={2}
                    className="validate"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <input
                    type="password"
                    ref="newPasswordConfirmation"
                    placeholder="Confirm New Password"
                    minLength={2}
                    className="validate"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <button
                    type="submit"
                    style={styles.buttonStyle}
                    className="btn blue white-text waves-effect"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
