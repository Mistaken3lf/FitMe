import {createContainer} from 'meteor/react-meteor-data';
import MyTrainer from '../components/MyDashboard/MyTrainer/MyTrainer.js';

export default createContainer(() => {
  const handle = Meteor.subscribe("myTrainer");

  const loading = !handle.ready();

  const currentClient = Meteor.users.findOne({
    _id: Meteor.userId()
  });

  const myTrainer = Meteor.users.findOne({
    _id: currentClient.createdBy
  });


  return {
    loading,
    myTrainer
  };
}, MyTrainer);