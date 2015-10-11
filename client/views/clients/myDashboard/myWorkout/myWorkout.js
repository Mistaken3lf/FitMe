Template.myWorkout.onCreated(function() {
  var self = this;

  //Subscribe to my currently assigned workout
  self.autorun(function() {
    self.subscribe("myWorkout");
  });
});



Template.myWorkoutShell.helpers({
  //Find my workout in MongoDB
  myWorkout: function() {
    var myWorkout = ClientWorkout.findOne({
      whosWorkout: Meteor.userId()
    });
    return myWorkout;
  },
});
