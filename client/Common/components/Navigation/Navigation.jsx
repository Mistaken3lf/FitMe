import React from 'react';

Navigation = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.users.findOne({
        _id: Meteor.userId()
      })
    };
  },

  versionNumber() {
    const version = "1.1.3";

    return version;
  },

  renderNav() {
    if (Roles.userIsInRole(Meteor.userId(), "admin")) {
      return (
        <AdminNavigation versionNumber={this.versionNumber()} username={this.data.currentUser.username} />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <TrainerNavigation versionNumber={this.versionNumber()} username={this.data.currentUser.username} />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "client")) {
      return (
        <ClientNavigation versionNumber={this.versionNumber()} username={this.data.currentUser.username}  />
      );
    } else if (!Meteor.user()) {
      return (
        <CommonNavigation versionNumber={this.versionNumber()} />
      );
    }
  },

  render() {
    return (
      <div>
        {this.renderNav()}
      </div>
    );
  }
});