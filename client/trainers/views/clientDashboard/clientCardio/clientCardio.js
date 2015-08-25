Template.clientCardio.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsCardio", clientId);
  });
});

Template.clientCardio.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

Template.clientCardio.helpers({
  currentClientsCardio: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});
    return currentClientsCardio;
  },
});
