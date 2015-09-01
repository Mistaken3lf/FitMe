//Run when the workout template is created
Template.trainerSchedule.onCreated(function () {
  var self = this;

  //Subscribe to the current clients workout based on url param
  self.autorun(function () {
    self.subscribe("trainerCalendar");
  });
});

Template.trainerSchedule.onRendered(function () {
  $('#trainerSchedule').fullCalendar({
    events: function(start, end, callback) {
      var events = [];
      calendarEvents = ClientWorkout.find();
      calendarEvents.forEach(function(evt) {
        events.push({
          id: evt._id,
          start: evt.workoutDate,
        });
      });
      callback(events);
    },
    editable: true
  });
});

Template.trainerSchedule.evt = function() {
  var calendarEvent = ClientWorkout.find({createdBy: Meteor.userId});
  return calendarEvent;
}
