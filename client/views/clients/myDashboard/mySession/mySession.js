Template.mySession.onCreated(function () {
  var self = this;

  //Subscribe to my profile to get my session information
  self.autorun(function () {
    self.subscribe("myProfile");
  });
});

Template.mySession.helpers({
  //Return the current client
  thisClient: function () {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    });
  },
  
  todaysDate: function () {
    return new Date().toDateString();
  }
});
