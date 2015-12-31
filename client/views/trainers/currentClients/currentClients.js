Template.currentClients.onCreated(function () {
  //Subscribe to the clients profile based on the url param
  this.autorun(() => {
    this.subscribe("currentClients");
    this.subscribe("myProfile");
  });
});

Template.currentClients.events({
  'click .deleteButton' (event) {
    //Find client to delete
    const curUser = Meteor.users.findOne({
      _id: this._id
    });
    
    //Check if the user is suspended
    if (curUser.userStatus == "suspended") {
      Bert.alert("Sorry, your account has been suspended", "danger", "growl-top-right");
      return;
    }

    //Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover" + " " + curUser.username,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, remove user",
      closeOnConfirm: false
    }, (isConfirm) => {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Deleted!', 'Client has been deleted', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("deleteClient", curUser._id, (error, result) => {
          if (error) {
            Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
          }
        });
      } else {
        swal('Cancelled', 'Your client is safe now', 'error');
      }
    });
  },

  'click .suspendClient' (event) {
    //Suspend client clicked on
    Meteor.call("suspendClient", this._id, (error, result) => {
      if (error) {
        Bert.alert('Sorry, your account is suspended', "danger", 'growl-top-right');
      }
    });
  },

  //Prevent the trainer from viewing the dashboard if they
  //are suspended otherwise direct them to the dashboard
  'click .username' (event) {
    const thisTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    }, {
      fields: {
        userStatus: 1
      }
    });
    
    //Dont let user click on a client if they are suspended
    if (thisTrainer.userStatus == "suspended") {
      Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
    } else {
      FlowRouter.go("/clientDashboard/" + this._id);
    }
  },

  "click .addClientButton" (event) {
    //Find client to delete
    const curTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });
    
    //Dont let trainer add clients if they are suspended
    if (curTrainer.userStatus == "suspended") {
      Bert.alert("Sorry, your account has been suspended", "danger", "growl-top-right");
      return;
    } else {
      FlowRouter.go("/addClient");
    }
  }
});

Template.currentClients.helpers({
  //Get all clients for easy search
  trainersIndex() {
    return TrainersClientsIndex;
  },

  //Check if the user is currently logging in
  isLoggingIn() {
    return Meteor.loggingIn();
  },

  clientSearchAttributes() {
    //Placeholder for easy search to search my clients
    return {
      placeholder: "Search For A Client"
    }
  }
});
