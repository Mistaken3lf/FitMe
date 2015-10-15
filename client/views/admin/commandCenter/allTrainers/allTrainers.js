Template.allTrainers.onCreated(function () {
  var self = this;

  //Subscribe to all trainers
  self.autorun(function () {
    self.subscribe("allTrainers");
  });
});

Template.allTrainers.helpers({
  //Find all trainers we are subscribed to
  trainer: function () {
    return Meteor.users.find({
      roles: "trainer"
    });
  }
});

Template.allTrainers.events({
  'click .removeTrainer': function (event) {
    //Call server function to delete the trainer clicked on
    Meteor.call("removeTrainer", this._id);
  },

  'click .suspendUser': function (event) {
    Meteor.call("suspendUser", this._id);
  }
});
