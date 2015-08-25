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

  isReady: function(sub) {
    if(sub) {
      return FlowRouter.subsReady(sub);
    } else {
      return FlowRouter.subsReady();
    }
}
});
