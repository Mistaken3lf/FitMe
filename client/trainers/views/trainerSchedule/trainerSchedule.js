//Run when the workout template is created
Template.trainerSchedule.onCreated(function () {
  var self = this;

  //Subscribe to the current clients workout based on url param
  self.autorun(function () {
    self.subscribe("trainerSchedule");
  });
});

Template.trainerSchedule.onRendered(function () {
  schedule = $('#trainerSchedule').fullCalendar({
    events: function(start, end, callback) {
      var events = [];
      var workoutEvents = ClientWorkout.find();
      workoutEvents.forEach(function(workoutEvent) {
        events.push({
          title: "Test",
          start: workoutEvent.workoutDate,
          end: workoutEvent.workoutdate,
        });
        callback(events);
      });
    },
    editable: true
  }).data().fullCalendar;

  Meteor.autorun(function() {
    var workoutEvents = ClientWorkout.find().fetch();
    $('#trainerSchedule').fullCalendar('refetchEvents');
  });
});
