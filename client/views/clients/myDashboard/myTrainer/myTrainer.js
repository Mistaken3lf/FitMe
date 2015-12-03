Template.myTrainer.onCreated(function () {
  var self = this;

  self.autorun(function () {
    //Subscribe to my profile info and my trainers profile
    self.subscribe("myTrainer");
    self.subscribe("myProfile");
  });
});

Template.myTrainer.helpers({
  myTrainer: function () {
    let currentClient = Meteor.users.findOne({
      _id: Meteor.userId()
    });
    
    return Meteor.users.findOne({
      _id: currentClient.createdBy
    });
  },

  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  }
});