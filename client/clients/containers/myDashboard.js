import {createContainer} from 'meteor/react-meteor-data';
import MyDashboard from '../components/MyDashboard/MyDashboard.js';

export default createContainer(() => {
  const handle = Meteor.subscribe("myProfile");

  const loading = !handle.ready();

  const currentClient = Meteor.users.findOne({
    _id: Meteor.userId()
  });

  let myClickedButton = Session.get("myClickedButton");


  return {
    loading,
    currentClient,
    myClickedButton
  };
}, MyDashboard);