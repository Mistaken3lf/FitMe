import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { composeWithTracker } from 'react-komposer';
import CommandCenter from '../views/commandCenter/CommandCenter.js';

function composer(props, onData) {
  if (Meteor.subscribe('allUsers').ready()) {
    let clickedButton = Session.get('trainerStatus');

    const loggingIn = Meteor.loggingIn();

    const currentUser = Meteor.users.findOne({
      _id: Meteor.userId(),
    });

    const activeTrainers = Meteor.users.find({
      roles: 'trainer',
      userStatus: 'active',
    }).fetch();

    const suspendedTrainers = Meteor.users.find({
      roles: 'trainer',
      userStatus: 'suspended',
    }).fetch();

    const deletedTrainers = Meteor.users.find({
      roles: 'trainer',
      userStatus: 'deleted',
    }).fetch();

    const totalTrainers = Meteor.users.find({
      roles: 'trainer',
    }).count();

    const totalClients = Meteor.users.find({
      roles: 'client',
    }).count();

    const totalUsers = Meteor.users.find({
      _id: {
        $ne: Meteor.userId(),
      },
    }).count();

    onData(null, {
      clickedButton,
      loggingIn,
      currentUser,
      activeTrainers,
      suspendedTrainers,
      deletedTrainers,
      totalTrainers,
      totalClients,
      totalUsers,
    });
  }
}

export default composeWithTracker(composer)(CommandCenter);
