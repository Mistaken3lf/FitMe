import {composeWithTracker} from 'react-komposer';
import MyProfile from '../components/MyProfile/MyProfile.js';

function composer(props, onData) {
  if (Meteor.subscribe('myProfile').ready()) {
    const userProfile = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    const loggingIn = Meteor.loggingIn();

    onData(null, {
      userProfile, loggingIn
    });
  };
};

export default composeWithTracker(composer)(MyProfile);