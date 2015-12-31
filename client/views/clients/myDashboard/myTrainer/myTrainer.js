Template.myTrainer.onCreated(function () {
  this.autorun(() => {
    //Subscribe to my profile info and my trainers profile
    this.subscribe("myTrainer");
    this.subscribe("myProfile");
  });
});

Template.myTrainer.helpers({
  //Find my trainer
  myTrainer() {
    const currentClient = Meteor.users.findOne({
      _id: Meteor.userId()
    });
    
    //Create the clients trainer
    return Meteor.users.findOne({
      _id: currentClient.createdBy
    });
  },

  //Check if the user is currently logging in
  isLoggingIn() {
    return Meteor.loggingIn();
  }
});