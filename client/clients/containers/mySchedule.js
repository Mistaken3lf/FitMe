import {composeWithTracker} from 'react-komposer';
import MySchedule from '../components/MyDashboard/MySchedule/MySchedule.js';

function composer(props, onData) {
  if (Meteor.subscribe('myProfile').ready()) {
    const currentClient = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    onData(null, {
      currentClient
    });
  }
}

export default composeWithTracker(composer)(MySchedule);