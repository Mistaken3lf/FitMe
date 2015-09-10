Template.clientStats.onCreated(function () {
  var self = this;

  //Subscribe to the current clients stats based on url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsStats", clientId);
  });
});

Template.clientStats.onRendered(function () {
  //Pop up date picker when a date field is selected
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 225,
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

Template.clientStats.helpers({
  //Get the current clients stats values
  currentClientsStats: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsStats = ClientStats.findOne({whosStats: clientId});

    //Return the stats object for the stats autoform doc
    return currentClientsStats;
  },

  //Get the currrent clients profile info to display their first and
  //last name
  currentClient: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = Meteor.users.findOne({'userProfile.whosProfile': clientId});
    return currentClient;
  },
});
