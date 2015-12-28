Template.adminDashboard.onCreated(function () {
  //Subscribe to all trainers
  this.autorun(() => {
    const trainerId = FlowRouter.getParam('_id');
    this.subscribe("currentTrainer", trainerId);
  });
});

Template.adminDashboard.helpers({
  //Get currently clicked on trainer
  currentTrainer() {
    const trainerId = FlowRouter.getParam('_id');
    const currentTrainer = Meteor.users.findOne({
      _id: trainerId
    });

    return currentTrainer;
  },

  //Check if the user is currently logging in
  isLoggingIn() {
    return Meteor.loggingIn();
  },
  
  //Check which template is currently used
  activeTemplate() {
    return Session.get("adminClickedButton");
  }
});

Template.adminDashboard.events({
  //Set the clicked on template based on which button is clicked
  "click .adminClickedButton": function (event) {
    let clickedButton = event.target.id;
    Session.set("adminClickedButton", clickedButton);
  }
});