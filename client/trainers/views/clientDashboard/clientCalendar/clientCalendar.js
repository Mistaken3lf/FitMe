Template.clientCalendar.onRendered( function () {
  var clientsCalendar = $("myClientsCalendar").fullCalendar({
    events: function(start, end, callback) {
      var events = [];
      workoutEvents = ClientWorkout.find({});

      workoutEvents.forEach(function(evt) {
        event = {id:evt._id, start:evt.start};
        events.push(event);
      })
      callback(events);
    }
  }).data().fullCalendar;
});
