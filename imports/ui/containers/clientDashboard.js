import {composeWithTracker} from 'react-komposer';
import MyDashboard from '../components/MyDashboard/MyDashboard.js';

function composer(props, onData) {
  if (Meteor.subscribe('myProfile').ready()) {
    const currentClient = Meteor.users.findOne({
      _id: Meteor.userId(),
    });

    let myClickedButton = Session.get('myClickedButton');

    const loggingIn = Meteor.loggingIn();

    onData(null, {
      currentClient, myClickedButton, loggingIn,
    });
  }
}

export default composeWithTracker(composer)(MyDashboard);