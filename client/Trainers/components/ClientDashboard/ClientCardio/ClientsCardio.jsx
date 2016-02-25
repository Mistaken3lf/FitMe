ClientsCardio = React.createClass({
  render() {
    if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <div>
        </div>
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
});