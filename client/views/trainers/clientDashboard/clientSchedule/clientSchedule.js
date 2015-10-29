Template.clientSchedule.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsProfile", clientId);
  });
});

Template.clientScheduleShell.onRendered(function () {
  $('#mondaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm"
  });

  $('#tuesdaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm"
  });

  $('#wednesdaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm"
  });

  $('#thursdaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm"
  });

  $('#fridaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm"
  });

  $('#saturdaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm"
  });

  $('#sundaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm"
  });
});

Template.clientScheduleShell.helpers({
  //Get the current clients profile based on the url param
  curClient: function () {
    var clientId = FlowRouter.getParam('_id');
    var curClient = Meteor.users.findOne({
      'userProfile.whosProfile': clientId
    });
    return curClient;
  },

  todaysDate: function () {
    return new Date().toDateString();
  }
});
