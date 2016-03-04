TrainerGuide = React.createClass({
  render() {
    if (!Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <NotAuthorized />
      );
    }
    if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <div>
          <GuideHeader />
          <HowToVideos />
          <FrequentQuestions />
        </div>
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
});