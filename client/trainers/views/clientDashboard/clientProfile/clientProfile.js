//Run when the profile template is created.
Template.clientProfile.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("myClientsProfiles", clientId);
  });
});

//Run when the profile template is rendered
Template.clientProfile.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

//Helper functions for the profile
Template.clientProfile.helpers({
  //Get the current clients profile based on the url param
  currentClient: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = Meteor.users.findOne({'userProfile.whosProfile': clientId});
    return currentClient;
  },
});
