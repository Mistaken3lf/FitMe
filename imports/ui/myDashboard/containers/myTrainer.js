import {composeWithTracker} from 'react-komposer';
import MyTrainer from '../components/MyDashboard/MyTrainer/MyTrainer.js';

function composer(props, onData) {
  if (Meteor.subscribe('myTrainer').ready()) {
    const currentClient = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    const myTrainer = Meteor.users.findOne({
      _id: currentClient.createdBy
    });

    onData(null, {
      currentClient, myTrainer
    });
  }
}

export default composeWithTracker(composer)(MyTrainer);