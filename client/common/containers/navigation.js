import {composeWithTracker} from 'react-komposer';
import Navigation from '../components/Navigation/Navigation.js';

function composer(props, onData) {
  const currentUser = Meteor.users.findOne({
    _id: Meteor.userId()
  });

  onData(null, {
    currentUser
  });
}

export default composeWithTracker(composer)(Navigation);