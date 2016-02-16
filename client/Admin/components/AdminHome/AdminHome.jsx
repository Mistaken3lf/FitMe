AdminHome = React.createClass({
  render() {
    if(Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if(Roles.userIsInRole(Meteor.userId(), "admin")) {
      return (
        <div>
          <AdminHomeHeader />
          <AdminHomeWelcome />
          <AdminHomeFooter />
        </div>
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
});