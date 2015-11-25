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
    format: "h:mm a",
    scrollInput: false
  });

  $('#tuesdaysSchedule').datetimepicker({
    datepicker: false,
    format: "h:mm a",
    scrollInput: false
  });

  $('#wednesdaysSchedule').datetimepicker({
    datepicker: false,
    format: "h:mm a",
    scrollInput: false
  });

  $('#thursdaysSchedule').datetimepicker({
    datepicker: false,
    format: "h:mm a",
    scrollInput: false
  });

  $('#fridaysSchedule').datetimepicker({
    datepicker: false,
    format: "h:mm a",
    scrollInput: false
  });

  $('#saturdaysSchedule').datetimepicker({
    datepicker: false,
    format: "h:mm a",
    scrollInput: false
  });

  $('#sundaysSchedule').datetimepicker({
    datepicker: false,
    format: "h:mm a",
    scrollInput: false
  });
});

Template.clientScheduleShell.helpers({
  //Get the current clients profile based on the url param
  curClient: function () {
    var clientId = FlowRouter.getParam('_id');
    var curClient = Meteor.users.findOne({
      whosProfile: clientId
    });
    return curClient;
  },
  
  //Get todays current date
  todaysDate: function () {
    return new Date().toDateString();
  }
});