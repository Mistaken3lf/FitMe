import {createContainer} from 'meteor/react-meteor-data';
import MySchedule from '../components/MyDashboard/MySchedule/MySchedule.js';

export default createContainer(() => {
  const handle = Meteor.subscribe("myProfile");

  const loading = !handle.ready();

  const currentClient = Meteor.users.findOne({
    _id: Meteor.userId()
  });

  return {
    loading,
    currentClient
  };
}, MySchedule);