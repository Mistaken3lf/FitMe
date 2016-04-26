import {composeWithTracker} from 'react-komposer';
import {FlowRouter} from 'meteor/kadira:flow-router';
import AdminDashboard from '../components/AdminDashboard/AdminDashboard.js';

function composer(props, onData) {
  const trainerId = FlowRouter.getParam('_id');

  if (Meteor.subscribe('currentTrainer', trainerId).ready() && Meteor.subscribe('trainersClients', trainerId).ready()) {
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

    onData(null, {
      currentUser, loggingIn, currentTrainer, trainersClientCount, clickedButton, trainersClients
    });
  };
};

export default composeWithTracker(composer)(AdminDashboard);