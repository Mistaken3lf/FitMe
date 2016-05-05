import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Navigation from '../views/navigation/Navigation.js';

function composer(props, onData) {
  const currentUser = Meteor.users.findOne({
    _id: Meteor.userId(),
  });

  onData(null, {
    currentUser,
  });
}

export default composeWithTracker(composer)(Navigation);
