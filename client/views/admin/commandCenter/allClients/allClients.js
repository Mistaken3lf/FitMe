Template.allClients.onCreated(function() {
  var self = this;

  //Subscribe to all my clients
  self.autorun(function() {
    self.subscribe("allClients");
  });
});



Template.allClients.helpers({
  //Find all clients we are subscribed to
  client: function() {
    return Meteor.users.find({
      roles: "client"
    });
  }
});



Template.allClients.events({
  'click .removeClient': function(event) {
    //Call server function to delete the client clicked on
    Meteor.call("removeClient", this._id);
  }
});
