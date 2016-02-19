TrainerGuide = React.createClass({
  render() {
    if(Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
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