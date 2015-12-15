Template.myAccount.onCreated(function () {
  var self = this;

  //Subscribe all the trainers current clients
  self.autorun(function () {
    self.subscribe("myProfile");
    self.subscribe("currentClients");
  });
});

Template.myAccount.helpers({
  myAccount: function () {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    });
  },

  formatDate: function (loginDate) {
    return loginDate.toDateString();
  },

  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },

  totalClients: function () {
    return Meteor.users.find({
      createdBy: Meteor.userId()
    }).count();
  }
});

Template.myAccount.events({
  "click .deleteAccount": function (event) {
    //Needed for sweet alerts
    var previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Are you sure?",
      text: "Your account and all clients will be removed!!!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete account!",
      closeOnConfirm: false
    }, function (isConfirm) {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Delete!', 'Your account has been removed.', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("deleteAccount");
        FlowRouter.go("/");
      } else {
        swal('Cancelled', 'Account is safe now :)', 'error');
      }
    });

  }
});