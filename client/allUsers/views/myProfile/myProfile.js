Template.myProfile.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe("myProfile");
  });
});

Template.myProfileShell.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

Template.myProfileShell.helpers({
  loggedInUser: function () {
    var loggedInUser = Meteor.users.findOne({_id: Meteor.userId()});
    return loggedInUser;
  },
});
