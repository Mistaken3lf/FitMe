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

  $('#mondaysScheduleStart').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#tuesdaysScheduleStart').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#wednesdaysScheduleStart').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#thursdaysScheduleStart').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#fridaysScheduleStart').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#saturdaysScheduleStart').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#sundaysScheduleStart').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#mondaysScheduleEnd').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#tuesdaysScheduleEnd').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#wednesdaysScheduleEnd').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#thursdaysScheduleEnd').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#fridaysScheduleEnd').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#saturdaysScheduleEnd').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
    scrollInput: false
  });

  $('#sundaysScheduleEnd').datetimepicker({
    datepicker: false,
    formatTime: 'HH:mm',
    format: 'HH:mm',
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
  },

  startOfWeek: function () {
    let startOfWeek = moment().startOf("week").format("ddd. MMM Do");
    return startOfWeek;
  },

  endOfWeek: function () {
    let endOfWeek = moment().endOf("week").format("ddd. MMM Do");
    return endOfWeek;
  }
});