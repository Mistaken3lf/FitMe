Template.clientSchedule.onCreated(function () {
  //Subscribe to the clients profile based on the url param
  this.autorun(() => {
    const clientId = FlowRouter.getParam('_id');
    this.subscribe("currentClientsProfile", clientId);
  });
});

Template.clientScheduleShell.onRendered(() => {
  //Datepicker for when the next payment is due
  $('#paymentDue').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  //Each of the following timepickers is for the schedule
  //of the clients start and end times for monday through sunday
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
  curClient() {
    const clientId = FlowRouter.getParam('_id');
    const curClient = Meteor.users.findOne({
      whosProfile: clientId
    });
    
    return curClient;
  },

  //Get todays current date
  todaysDate() {
    return new Date().toDateString();
  },
  
  //Get the start day of the week
  startOfWeek() {
    let startOfWeek = moment().startOf("week").format("ddd. MMM Do");
    return startOfWeek;
  },
  
  //Get the end day of the week
  endOfWeek() {
    let endOfWeek = moment().endOf("week").format("ddd. MMM Do");
    return endOfWeek;
  }
});

Template.clientScheduleShell.events({
  "click .cancelMonday" (event) {
    $('[name=mondaysScheduleStart]').val('');
    $('[name=mondaysScheduleEnd]').val('');
    $('[name=mondayDescription]').val('');
    const clientId = FlowRouter.getParam('_id'); 
    Meteor.call("cancelMondaysAppointment", clientId);
  },
  
  "click .cancelTuesday" (event) {
    $('[name=tuesdaysScheduleStart]').val('');
    $('[name=tuesdaysScheduleEnd]').val('');
    $('[name=tuesdayDescription]').val('');
    const clientId = FlowRouter.getParam('_id'); 
    Meteor.call("cancelTuesdaysAppointment", clientId);
  },
  
  "click .cancelWednesday" (event) {
    $('[name=wednesdaysScheduleStart]').val('');
    $('[name=wednesdaysScheduleEnd]').val('');
    $('[name=wednesdayDescription]').val('');
    const clientId = FlowRouter.getParam('_id'); 
    Meteor.call("cancelWednesdaysAppointment", clientId);
  },
  
  "click .cancelThursday" (event) {
    $('[name=thursdaysScheduleStart]').val('');
    $('[name=thursdaysScheduleEnd]').val('');
    $('[name=thursdayDescription]').val('');
    const clientId = FlowRouter.getParam('_id'); 
    Meteor.call("cancelThursdaysAppointment", clientId);
  },
  
  "click .cancelFriday" (event) {
    $('[name=fridaysScheduleStart]').val('');
    $('[name=fridaysScheduleEnd]').val('');
    $('[name=fridayDescription]').val('');
    const clientId = FlowRouter.getParam('_id'); 
    Meteor.call("cancelFridaysAppointment", clientId);
  },
  
  "click .cancelSaturday" (event) {
    $('[name=saturdaysScheduleStart]').val('');
    $('[name=saturdaysScheduleEnd]').val('');
    $('[name=saturdayDescription]').val('');
    const clientId = FlowRouter.getParam('_id'); 
    Meteor.call("cancelSaturdaysAppointment", clientId);
  },
  
  "click .cancelSunday" (event) {
    $('[name=sundaysScheduleStart]').val('');
    $('[name=sundaysScheduleEnd]').val('');
    $('[name=sundayDescription]').val('');
    const clientId = FlowRouter.getParam('_id'); 
    Meteor.call("cancelSundaysAppointment", clientId);
  }
});