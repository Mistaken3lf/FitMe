Template.currentClients.onCreated(function() {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function() {
    self.subscribe("currentClients");
  });
});



Template.currentClients.events({
  'click .deleteButton': function(event) {
    //Call server function to delete the client clicked on
    Meteor.call("deleteClient", this._id);
  }
});



Template.currentClients.helpers({
  'users': function() {
    //Show all of my clients and dont show my own information
    return Meteor.users.find({
      _id: {
        $ne: Meteor.userId()
      }
    });
  },
});
