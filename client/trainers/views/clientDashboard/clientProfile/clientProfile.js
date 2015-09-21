////////////////////////////////////////////////////////////////////////////////
Template.clientProfile.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsProfile", clientId);
  });
});

////////////////////////////////////////////////////////////////////////////////

Template.clientProfileShell.onRendered(function () {
  //Pop up a datepicker when a date field is selected
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 225,
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

////////////////////////////////////////////////////////////////////////////////

Template.clientProfileShell.helpers({
  //Get the current clients profile based on the url param
  currentClient: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = Meteor.users.findOne({
      'userProfile.whosProfile': clientId
    });
    return currentClient;
  },
});

////////////////////////////////////////////////////////////////////////////////
