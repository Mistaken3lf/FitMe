//Run when the profile template is created.
Template.currentClients.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    self.subscribe("currentClients");
  });
});

Template.currentClients.events({
  'click .deleteButton': function(event) {
    Meteor.call("deleteClient", this._id);
  }
});

Template.currentClients.helpers({
  //Helper function to display users in table from subscription
  'users': function () {
    //Show all clients and dont show my own information
    return Meteor.users.find({_id: {$ne: Meteor.userId()}});
  },
});
