Template.currentClients.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    self.subscribe("currentClients");
    self.subscribe("myProfile");
  });
});

Template.currentClients.events({
  'click .deleteButton': function (event) {
    //Find client to delete
    var curUser = Meteor.users.findOne({
      _id: this._id
    });

    //Needed for sweet alerts
    var previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover" + " " + curUser.username,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, remove user",
      closeOnConfirm: false
    }, function (isConfirm) {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Deleted!', 'Client has been deleted', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("deleteClient", curUser._id, function (error, result) {
          if (error) {
            Bert.alert("Sorry, you account has been suspended", 'danger', 'growl-top-right');
          }
        });
      } else {
        swal('Cancelled', 'Your client is safe now', 'error');
      }
    });
  },

  'click .suspendClient': function (event) {
    //Suspend client clicked on
    Meteor.call("suspendClient", this._id, function (error, result) {
      if (error) {
        Bert.alert('Sorry, your account is suspended', "danger", 'growl-top-right');
      }
    });
  },
  
  //Prevent the trainer from viewing the dashboard if they
  //are suspended otherwise direct them to the dashboard
  'click .username': function (event) {
    let thisTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    }, {
      fields: {
        userStatus: 1
      }
    });

    if (thisTrainer.userStatus == "suspended") {
      Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
    } else {
      FlowRouter.go("/clientDashboard/" + this._id);
    }
  }
});

Template.currentClients.helpers({
  //Get all clients for easy search
  trainersIndex: function () {
    return UsersIndex;
  },

  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },

  clientSearchAttributes: function () {
    //Placeholder for easy search to search my clients
    return {
      placeholder: "Search For A Client"
    }
  }
});
