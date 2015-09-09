Template.mySchedule.onCreated(function() {
    var self = this;
    //Subscribe to the trainers schedule
    self.autorun(function() {
        self.subscribe("mySchedule");
    });
});

Template.mySchedule.helpers({
  //Calendar events
  events: function() {
      var fc = $('.fc');
      return function(start, end, tz, callback) {
          Meteor.subscribe("mySchedule", function() {
              fc.fullCalendar('refetchEvents');
          });

          //Get clients session date set in the dashboard profile for that
          //client
          var events = Meteor.users.find({}).map(function(it) {
              return {
                title: "Workout Day",
                start: it.sessionDate.toISOString(),
                allDay: true,
              };
          });
          callback(events);
      };
  }
});

Template.mySchedule.onRendered(function() {
  //Make calendar reactive
  var fc = this.$('.fc');
  this.autorun(function() {
      Meteor.users.find();
      fc.fullCalendar('refetchEvents');
  });
});
