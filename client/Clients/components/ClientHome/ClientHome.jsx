ClientHome = React.createClass({
  render() {
    if(Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "client")) {
      return (
        <div>
          <ClientHomeHeader />
          <ClientHomeWelcome />
          <ClientHomeFooter />
        </div>
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
})