import {createContainer} from 'meteor/react-meteor-data';
import {FlowRouter} from 'meteor/kadira:flow-router';
import AdminDashboard from '../components/AdminDashboard/AdminDashboard.js';

export default createContainer(() => {
  const trainerId = FlowRouter.getParam('_id');
  const handle = Meteor.subscribe("currentTrainer", trainerId);
  const clients = Meteor.subscribe("trainersClients", trainerId);

  const loading = !handle.ready() && !clients.ready();

  const currentUser = Meteor.users.findOne({
    _id: Meteor.userId()
  });

  let loggingIn = Meteor.loggingIn();

  const currentTrainer = Meteor.users.findOne({
    _id: trainerId
  });

  const trainersClientCount = Meteor.users.find({
    createdBy: trainerId
  }).count();

  const clickedButton = Session.get("adminClickedButton");

  let trainersClients = Meteor.users.find({
    createdBy: trainerId,
  }, {
    fields: {
      username: 1,
      sessionDate: 1,
      firstName: 1,
      lastName: 1,
      userStatus: 1,
      createdBy: 1
    }
  }).fetch();

  return {
    loading,
    currentUser,
    loggingIn,
    currentTrainer,
    clickedButton,
    trainersClients,
    trainersClientCount
  };
}, AdminDashboard);