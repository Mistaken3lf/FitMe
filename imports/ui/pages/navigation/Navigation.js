import React, {Component, PropTypes} from 'react';
import AdminNavigation from './AdminNavigation.js';
import TrainerNavigation from './TrainerNavigation.js';
import ClientNavigation from './ClientNavigation.js';
import CommonNavigation from './CommonNavigation.js';
import {Meteor} from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';

export default class Navigation extends Component {
  versionNumber() {
    const version = '1.1.9';

    return version;
  }

  renderNav() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return (
        <AdminNavigation
          versionNumber={this.versionNumber()}
          username={this.props.currentUser.username}
        />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), 'trainer')) {
      return (
        <TrainerNavigation
          versionNumber={this.versionNumber()}
          username={this.props.currentUser.username}
        />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), 'client')) {
      return (
        <ClientNavigation
          versionNumber={this.versionNumber()}
          username={this.props.currentUser.username}
        />
      );
    } else {
      return (
        <CommonNavigation
          versionNumber={this.versionNumber()}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderNav()}
      </div>
    );
  }
}

Navigation.propType = {
  currentUser: PropTypes.object.isRequired,
};
