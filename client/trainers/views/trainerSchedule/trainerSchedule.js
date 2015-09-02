//Run when the workout template is created
Template.trainerSchedule.onCreated(function() {
    var self = this;
    //Subscribe to the current clients workout based on url param
    self.autorun(function() {
        self.subscribe("trainerSchedule");
    });
});

Template.trainerSchedule.helpers({
    events: function() {
        var fc = $('.fc');
        return function(start, end, tz, callback) {
            Meteor.subscribe("trainerSchedule", function() {
                fc.fullCalendar('refetchEvents');
            });
            var events = ClientWorkout.find().map(function(it) {
                return {
                    title: "Workout Day",
                    start: it.workoutDate,
                    allDay: true,
                };
            });
            callback(events);
        };
    }
});

Template.trainerSchedule.onRendered(function() {
    var fc = this.$('.fc');
    this.autorun(function() {
        ClientWorkout.find();
        fc.fullCalendar('refetchEvents');
    })
});
