Navigation = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  versionNumber() {
    const version = "1.0.10";

    return version;
  },

  render() {
    if (Roles.userIsInRole(Meteor.userId(), "admin")) {
      return (
        <AdminNavigation versionNumber={this.versionNumber()} username={this.data.currentUser.username} />
      );
    }

    if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <TrainerNavigation versionNumber={this.versionNumber()} username={this.data.currentUser.username} />
      );
    }

    if (Roles.userIsInRole(Meteor.userId(), "client")) {
      return (
        <ClientNavigation versionNumber={this.versionNumber()} username={this.data.currentUser.username}  />
      );
    }

    if (!Meteor.user()) {
      return (
        <CommonNavigation versionNumber={this.versionNumber()} />
      );
    }
  }
});