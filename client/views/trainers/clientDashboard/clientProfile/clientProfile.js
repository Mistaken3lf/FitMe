Template.clientProfile.onCreated(function () {
  //Subscribe to the clients profile based on the url param
  this.autorun(() => {
    const clientId = FlowRouter.getParam('_id');
    this.subscribe("currentClientsProfile", clientId);
  });
});

Template.clientProfileShell.onRendered(() => {
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
  currentClient() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = Meteor.users.findOne({
      whosProfile: clientId
    });

    return currentClient;
  },
});
