Template.clientCardio.onRendered(function() {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

Template.clientCardio.helpers({
  //Helper function to display users in table from subscription
  'cardioCalculation': function () {
    //Show all clients and dont show my own information
    cardioProgramMaxHeartRate = 220 - cardioProgramAge;
    return Meteor.users.cardioProgramMaxHeartRate;
  }
});
