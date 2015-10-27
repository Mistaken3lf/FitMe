Template.myWorkout.onCreated(function () {
  var self = this;
  //Subscribe to my currently assigned workout
  self.autorun(function () {
    self.subscribe("myWorkout");
  });
});

Template.myWorkoutShell.onRendered(function () {
  //Pop up date picker when a date field is selected
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 225,
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

Template.myWorkoutShell.helpers({
  //Find my workout in MongoDB
  myWorkout: function () {
    var myWorkout = ClientWorkout.findOne({
      whosWorkout: Meteor.userId()
    });
    return myWorkout;
  },
});
