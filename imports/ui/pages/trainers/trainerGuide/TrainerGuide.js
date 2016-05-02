import React from 'react';
import Loading from '../../../common/components/Loading/Loading.js';
import NotAuthorized from '../../../common/components/NotAuthorized/NotAuthorized.js';

TrainerGuide = React.createClass({
  render() {
    if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (!Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <NotAuthorized />
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