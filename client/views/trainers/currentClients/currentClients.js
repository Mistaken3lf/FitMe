Template.currentClients.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    self.subscribe("currentClients");
  });
});

Template.currentClients.events({
  'click .deleteButton': function (event) {
    var curUser = Meteor.users.findOne({
      _id: this._id
    });

    var previousWindowKeyDown = window.onkeydown;

    swal({
      title: "Are you sure?",
      text: "You will not be able to recover" + " " + curUser.username,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, remove user!",
      closeOnConfirm: false
    }, function (isConfirm) {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Deleted!', 'Client has been deleted.', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("deleteClient", curUser._id);
      } else {
        swal('Cancelled', 'Your client is safe now :)', 'error');
      }
    });
  },

  'click .suspendUser': function (event) {
    Meteor.call("suspendUser", this._id);
  },

  'click .reactive-table tbody tr': function (event) {
    event.preventDefault();
    var client = this;
    if (event.target.className == "clickedClient blue-text") {
      $(event.target).text("loading");
      FlowRouter.go("/clientDashboard/" + client._id);
    }
  }
});

Template.currentClients.helpers({
  currentClients: function () {
    //Show all of my clients and dont show my own information
    return Meteor.users.find({
      _id: {
        $ne: Meteor.userId()
      }
    });
  },

  clientFields: function () {
    return [{
      key: 'username',
      label: 'username',
      cellClass: 'clickedClient blue-text'
    }, {
      key: 'userProfile.firstName',
      label: 'First Name'
    }, {
      key: 'userProfile.lastName',
      label: 'Last Name'
    }, {
      key: 'userStatus',
      label: 'User Status'
    }]
  },

  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  }
});
