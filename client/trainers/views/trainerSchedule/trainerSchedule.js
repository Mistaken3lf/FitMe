////////////////////////////////////////////////////////////////////////////////
Template.trainerSchedule.onCreated(function() {
  var self = this;
  //Subscribe to the trainers schedule
  self.autorun(function() {
    self.subscribe("trainerSchedule");
  });
});

////////////////////////////////////////////////////////////////////////////////

Template.trainerSchedule.helpers({
  events: function() {
    var fc = $('.fc');
    return function(start, end, tz, callback) {
      Meteor.subscribe("trainerSchedule", function() {
        fc.fullCalendar('refetchEvents');
      });

      //Get all my clients scheduled meeting days
      var events = Meteor.users.find({
        _id: {
          $ne: Meteor.userId()
        }
      }).map(function(it) {
        return {
          title: it.username,
          start: it.sessionDate.toISOString(),
          allDay: true,
        };
      });

      callback(events);
    };
  }
});

////////////////////////////////////////////////////////////////////////////////

Template.trainerSchedule.onRendered(function() {
  //Make calendar reactive
  var fc = this.$('.fc');
  this.autorun(function() {
    Meteor.users.find({
      _id: {
        $ne: Meteor.userId()
      }
    });
    fc.fullCalendar('refetchEvents');
  });
});

////////////////////////////////////////////////////////////////////////////////
