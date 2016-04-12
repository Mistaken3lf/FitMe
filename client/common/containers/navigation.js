import {createContainer} from 'meteor/react-meteor-data';
import Navigation from '../components/Navigation/Navigation.js';

export default createContainer(() => {
  const currentUser = Meteor.users.findOne({
    _id: Meteor.userId()
  });

  return {
    currentUser
  };
}, Navigation);