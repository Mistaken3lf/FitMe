ClientHome = React.createClass({
  render() {
    if (Roles.userIsInRole(Meteor.userId(), "client")) {
      return (
        <div>
          <ClientHomeHeader />
          <ClientHomeWelcome />
          <ClientHomeFooter />
        </div>
      );
    } else if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
})