import {createContainer} from 'meteor/react-meteor-data';
import MyProfile from '../components/MyProfile/MyProfile.js';

export default createContainer(() => {
  const handle = Meteor.subscribe("myProfile");
  const loading = !handle.ready();

  const userProfile = Meteor.users.findOne({
    _id: Meteor.userId()
  });

  const loggingIn = Meteor.loggingIn();

  return {
    loading,
    loggingIn,
    userProfile
  };
}, MyProfile);