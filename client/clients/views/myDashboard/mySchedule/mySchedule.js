Template.mySchedule.onCreated(function() {
    var self = this;
    //Subscribe to the current clients schedule
    self.autorun(function() {
        self.subscribe("mySchedule");
    });
});

Template.mySchedule.helpers({
  events: function() {
      var fc = $('.fc');
      return function(start, end, tz, callback) {
          Meteor.subscribe("mySchedule", function() {
              fc.fullCalendar('refetchEvents');
          });

          //Get the current workout day for the current client
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
