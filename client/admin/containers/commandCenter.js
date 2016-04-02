import CommandCenter from '../components/CommandCenter/CommandCenter.js';
import { createContainer } from 'meteor/react-meteor-data';

export default createContainer(() => {
  const handle = Meteor.subscribe("allUsers");
  const loading = !handle.ready();

  let clickedButton = Session.get("trainerStatus");

  const activeTrainers = Meteor.users.find({
    roles: "trainer",
    userStatus: "active"
  }).fetch();

  const suspendedTrainers = Meteor.users.find({
    roles: "trainer",
    userStatus: "suspended"
  }).fetch();

  const deletedTrainers = Meteor.users.find({
    roles: "trainer",
    userStatus: "deleted"
  }).fetch();

  const totalTrainers = Meteor.users.find({
    roles: "trainer"
  }).count();

  const totalClients = Meteor.users.find({
    roles: "client"
  }).count();

  const totalUsers = Meteor.users.find({
    _id: {
      $ne: Meteor.userId()
    }
  }).count();

  return {
    loading,
    clickedButton,
    activeTrainers,
    suspendedTrainers,
    deletedTrainers,
    totalTrainers,
    totalClients,
    totalUsers,
  };
}, CommandCenter);