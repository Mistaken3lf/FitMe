//Run when the workout template is created
Template.trainerCalendar.onCreated(function () {
  var self = this;

  //Subscribe to the current clients workout based on url param
  self.autorun(function () {
    self.subscribe("trainerCalendarPublication");
  });
});

Template.trainerCalendar.onRendered(function () {
  $('#trainerCalendar').fullCalendar({
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

Template.trainerCalendar.evt = function() {
  var calendarEvent = ClientWorkout.find({createdBy: Meteor.userId});
  return calendarEvent;
}
