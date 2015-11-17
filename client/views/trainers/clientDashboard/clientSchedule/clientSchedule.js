Template.clientSchedule.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsProfile", clientId);
  });
});

Template.clientScheduleShell.onRendered(function () {
  $('#paymentDue').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  $('#mondaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm",
    scrollInput: false
  });

  $('#tuesdaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm",
    scrollInput: false
  });

  $('#wednesdaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm",
    scrollInput: false
  });

  $('#thursdaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm",
    scrollInput: false
  });

  $('#fridaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm",
    scrollInput: false
  });

  $('#saturdaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm",
    scrollInput: false
  });

  $('#sundaysSchedule').datetimepicker({
    datepicker: false,
    format: "H:mm",
    scrollInput: false
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