Template.clientProfile.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("myClientsProfiles", clientId);
  });
});

Template.clientProfile.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

Template.clientProfile.helpers({
  currentClient: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = Meteor.users.findOne({'userProfile.whosProfile': clientId});
    return currentClient;
  },
});
