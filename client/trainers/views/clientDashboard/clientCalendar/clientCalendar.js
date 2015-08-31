//Run when the profile template is created.
Template.clientCalendar.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsCalendar", clientId);
  });
});

Template.clientCalendar.onRendered(function () {
  var clientId = FlowRouter.getParam('_id');
  var currentClient = Meteor.users.findOne({'userProfile.whosProfile': clientId});
  var currentClientsWorkout = ClientWorkout.findOne({whosWorkout: clientId});

  var clientsCalendar = $("myClientsCalendar").fullCalendar({
    dayClick: function(date, allDay, jsEvent, view) {

    },

    eventClick: function(calEvent, jsEvent, view) {

    },

    events: function(start, end, callback) {
      var events = [];
      calEvents = CalEvents.find({whosCalendar: currentClient._id}, {reactive: false}).fetch();
      calEvents.forEach(function(evt) {
        events.push({
          id: evt._id,
          title: evt.title,
          start: evt.start,
          end: evt.end,
        });
      });
      callback(events);
    },
    editable: true
  });

  Deps.autorun(function(){
    $('#myClientsCalendar').fullCalendar('refetchEvents');
  });
});
