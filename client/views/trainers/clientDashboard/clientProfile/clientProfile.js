Template.clientProfile.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsProfile", clientId);
  });
});

Template.clientProfileShell.onRendered(function () {
  //Popup date picker to select clients birthday
  $('#clientBirthday').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
});

Template.clientProfileShell.helpers({
  //Get the current clients profile based on the url param
  currentClient: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = Meteor.users.findOne({
      whosProfile: clientId
    });

    return currentClient;
  },
});
