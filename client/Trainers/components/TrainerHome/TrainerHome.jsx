TrainerHome = React.createClass({
  render() {
    if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return(
        <div>
          <TrainerHomeHeader />
          <TrainerHomeWelcome />
          <TrainerHomeAdvertisement />
          <TrainerHomePlans />
          <TrainerHomeFinalLook />
          <TrainerHomeFooter />
        </div>
      );
    } else if(Meteor.loggingIn()) {
        return (
          <Loading />
        );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
});