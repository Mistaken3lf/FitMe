Template.accountDetails.onCreated(function () {
  var self = this;

  //Subscribe all the trainers current clients
  self.autorun(function () {
    var trainerId = FlowRouter.getParam('_id');
    self.subscribe("trainersAccount", trainerId);
  });
});

Template.accountDetails.helpers({
  accountSetting: function () {
    var trainerId = FlowRouter.getParam('_id');
    return Meteor.users.findOne({
      _id: trainerId
    });
  },
  
  formatDate: function (loginDate) {
    return loginDate.toDateString();
  }
});

Template.accountDetails.events({
  'click .monthlyPlan': function (event) {
    var trainerId = FlowRouter.getParam('_id');
    Meteor.call("monthlyPlan", trainerId, function (error) {
      if (error) {
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        Bert.alert("Monthly Plan Started", 'success', 'growl-top-right');
      }
    });
  }
});