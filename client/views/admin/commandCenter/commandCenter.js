Template.commandCenter.onCreated(function() {
  var self = this;

  //Subscribe to my cardio
  self.autorun(function() {
    self.subscribe("allUsers");
  });
});

Template.commandCenter.onRendered(function() {
  //Activate the command center tabs
  $('ul.tabs').tabs();
});

Template.commandCenter.helpers({
  totalTrainers: function() {
    totalTrainers = Meteor.users.find({
      roles: 'trainer'
    }).count();

    return totalTrainers;
  },

  totalClients: function() {
    totalClients = Meteor.users.find({
      roles: 'client'
    }).count();

    return totalClients;
  },

  totalUsers: function() {
    totalUsers = Meteor.users.find({
      _id: {
        $ne: Meteor.userId()
      }
    }).count();

    return totalUsers;
  }
});
