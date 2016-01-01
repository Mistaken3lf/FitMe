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
  //Cancel mondays schedule with client
  "click .cancelMonday" (event) {
    if (($('[name=mondayDescription]').val() == "") || ($('[name=mondaysScheduleEnd]').val() == "") || ($('[name=mondaysScheduleStart]').val() == "")) {
      Bert.alert("You must fill in the entire appointment to cancel", "danger", "growl-top-right");
      return;
    } else {
      //Needed for sweet alerts
      let previousWindowKeyDown = window.onkeydown;

      //Sweet alert to confirm deletion of client
      swal({
        title: "Are You Sure?",
        text: "This will cancel your appointment for monday and send the client an email letting them know you will not be able to make the appointment",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: true
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if (isConfirm) {
          $('[name=mondaysScheduleStart]').val('');
          $('[name=mondaysScheduleEnd]').val('');
          $('[name=mondayDescription]').val('');
          const clientId = FlowRouter.getParam('_id');
          Meteor.call("cancelMondaysAppointment", clientId);
        } else {
          swal('Cancelled', 'Your account will not be reset.', 'error');
        }
      });
    }
  },

  //Cancel tuesdays schedule with client
  "click .cancelTuesday" (event) {
    if (($('[name=tuesdayDescription]').val() == "") || ($('[name=tuesdaysScheduleEnd]').val() == "") || ($('[name=tuesdaysScheduleStart]').val() == "")) {
      Bert.alert("You must fill in the entire appointment to cancel", "danger", "growl-top-right");
      return;
    } else {
      //Needed for sweet alerts
      let previousWindowKeyDown = window.onkeydown;
      
      swal({
        title: "Are You Sure?",
        text: "This will cancel your appointment for tuesday and send the client an email letting them know you will not be able to make the appointment",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: true
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if (isConfirm) {
          $('[name=tuesdaysScheduleStart]').val('');
          $('[name=tuesdaysScheduleEnd]').val('');
          $('[name=tuesdayDescription]').val('');
          const clientId = FlowRouter.getParam('_id');
          Meteor.call("cancelTuesdaysAppointment", clientId);
        } else {
          swal('Cancelled', 'Your account will not be reset.', 'error');
        }
      });
    }
  },

  //Cancel wednesdays schedule with client
  "click .cancelWednesday" (event) {
    if (($('[name=wednesdayDescription]').val() == "") || ($('[name=wednesdaysScheduleEnd]').val() == "") || ($('[name=wednesdaysScheduleStart]').val() == "")) {
      Bert.alert("You must fill in the entire appointment to cancel", "danger", "growl-top-right");
      return;
    } else {
      //Needed for sweet alerts
      let previousWindowKeyDown = window.onkeydown;
      
      swal({
        title: "Are You Sure?",
        text: "This will cancel your appointment for wednesday and send the client an email letting them know you will not be able to make the appointment",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: true
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if (isConfirm) {
          $('[name=wednesdaysScheduleStart]').val('');
          $('[name=wednesdaysScheduleEnd]').val('');
          $('[name=wednesdayDescription]').val('');
          const clientId = FlowRouter.getParam('_id');
          Meteor.call("cancelWednesdaysAppointment", clientId);
        } else {
          swal('Cancelled', 'Your account will not be reset.', 'error');
        }
      });
    }
  },

  //Cancel thursdays schedule with client
  "click .cancelThursday" (event) {
    if (($('[name=thursdayDescription]').val() == "") || ($('[name=thursdaysScheduleEnd]').val() == "") || ($('[name=thursdaysScheduleStart]').val() == "")) {
      Bert.alert("You must fill in the entire appointment to cancel", "danger", "growl-top-right");
      return;
    } else {
      //Needed for sweet alerts
      let previousWindowKeyDown = window.onkeydown;
      
      swal({
        title: "Are You Sure?",
        text: "This will cancel your appointment for thursday and send the client an email letting them know you will not be able to make the appointment",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: true
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if (isConfirm) {
          $('[name=thursdaysScheduleStart]').val('');
          $('[name=thursdaysScheduleEnd]').val('');
          $('[name=thursdayDescription]').val('');
          const clientId = FlowRouter.getParam('_id');
          Meteor.call("cancelThursdaysAppointment", clientId);
        } else {
          swal('Cancelled', 'Your account will not be reset.', 'error');
        }
      });
    }
  },

  //Cancel fridays schedule with client
  "click .cancelFriday" (event) {
    if (($('[name=fridayDescription]').val() == "") || ($('[name=fridaysScheduleEnd]').val() == "") || ($('[name=fridaysScheduleStart]').val() == "")) {
      Bert.alert("You must fill in the entire appointment to cancel", "danger", "growl-top-right");
      return;
    } else {
      //Needed for sweet alerts
      let previousWindowKeyDown = window.onkeydown;
      
      swal({
        title: "Are You Sure?",
        text: "This will cancel your appointment for friday and send the client an email letting them know you will not be able to make the appointment",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: true
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if (isConfirm) {
          $('[name=fridaysScheduleStart]').val('');
          $('[name=fridaysScheduleEnd]').val('');
          $('[name=fridayDescription]').val('');
          const clientId = FlowRouter.getParam('_id');
          Meteor.call("cancelFridaysAppointment", clientId);
        } else {
          swal('Cancelled', 'Your account will not be reset.', 'error');
        }
      });
    }
  },

  //Cancel saturdays schedule with client
  "click .cancelSaturday" (event) {
    if (($('[name=saturdayDescription]').val() == "") || ($('[name=saturdaysScheduleEnd]').val() == "") || ($('[name=saturdaysScheduleStart]').val() == "")) {
      Bert.alert("You must fill in the entire appointment to cancel", "danger", "growl-top-right");
      return;
    } else {
      //Needed for sweet alerts
      let previousWindowKeyDown = window.onkeydown;
      
      swal({
        title: "Are You Sure?",
        text: "This will cancel your appointment for saturday and send the client an email letting them know you will not be able to make the appointment",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: true
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if (isConfirm) {
          $('[name=saturdaysScheduleStart]').val('');
          $('[name=saturdaysScheduleEnd]').val('');
          $('[name=saturdayDescription]').val('');
          const clientId = FlowRouter.getParam('_id');
          Meteor.call("cancelSaturdaysAppointment", clientId);
        } else {
          swal('Cancelled', 'Your account will not be reset.', 'error');
        }
      });
    }
  },

  //Cancel sundays scheudle with client
  "click .cancelSunday" (event) {
    if (($('[name=sundayDescription]').val() == "") || ($('[name=sundaysScheduleEnd]').val() == "") || ($('[name=sundaysScheduleStart]').val() == "")) {
      Bert.alert("You must fill in the entire appointment to cancel", "danger", "growl-top-right");
      return;
    } else {
      //Needed for sweet alerts
      let previousWindowKeyDown = window.onkeydown;
      
      swal({
        title: "Are You Sure?",
        text: "This will cancel your appointment for sunday and send the client an email letting them know you will not be able to make the appointment",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: true
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if (isConfirm) {
          $('[name=sundaysScheduleStart]').val('');
          $('[name=sundaysScheduleEnd]').val('');
          $('[name=sundayDescription]').val('');
          const clientId = FlowRouter.getParam('_id');
          Meteor.call("cancelSundaysAppointment", clientId);
        } else {
          swal('Cancelled', 'Your account will not be reset.', 'error');
        }
      });
    }
  }
});