import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import Navigation from '../pages/navigation/Navigation.js';

export default createContainer(() => {
  const currentUser = Meteor.users.findOne({
    id: Meteor.userId(),
  });

  return {
    currentUser
  };
}, Navigation);
