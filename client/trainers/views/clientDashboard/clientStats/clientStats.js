//Run when the client stats template is created
Template.clientStats.onCreated(function () {
  var self = this;

  //Subscribe to the current clients stats based on url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsStats", clientId);
  });
});

//Run when stats template is rendered
Template.clientStats.onRendered(function () {
  //Pop up date picker
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

//Helper functions for the stats template
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
