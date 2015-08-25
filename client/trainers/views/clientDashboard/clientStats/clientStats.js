Template.clientStats.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsStats", clientId);
  });
});

Template.clientStats.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

Template.clientStats.helpers({
  currentClientsStats: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsStats = ClientStats.findOne({whosStats: clientId});
    return currentClientsStats;
  },

  currentClient: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = Meteor.users.findOne({'userProfile.whosProfile': clientId});
    return currentClient;
  },
});
