Template.commandCenter.onCreated(function () {
  //Subscribe to all current users
  this.autorun(() => {
    this.subscribe("allUsers");
  });
});

Template.commandCenter.helpers({
  //Total number of trainers
  totalTrainers() {
    let totalTrainers = Meteor.users.find({
      roles: 'trainer'
    }).count();

    return totalTrainers;
  },

  //Total number of clients
  totalClients() {
    let totalClients = Meteor.users.find({
      roles: 'client'
    }).count();

    return totalClients;
  },

  //Total user count
  totalUsers() {
    let totalUsers = Meteor.users.find({
      _id: {
        $ne: Meteor.userId()
      }
    }).count();

    return totalUsers;
  },

  //Find all trainers we are subscribed to
  trainer() {
    return Meteor.users.find({
      roles: "trainer"
    });
  },

  //Check if the user is currently logging in
  isLoggingIn() {
    return Meteor.loggingIn();
  },

  //Index of all active trainers
  activeTrainersIndex() {
    return ActiveTrainersIndex;
  },

  activeTrainersAttributes() {
    //Placeholder for easy search
    return {
      placeholder: "Search For A Trainer"
    }
  },

  activeTrainerLoadMoreButton() {
    return {
      class: "btn blue white-text"
    }
  },

  //Index of all suspended trainers
  suspendedTrainersIndex() {
    return SuspendedTrainersIndex;
  },

  //Placeholder text for easy search
  suspendedTrainersAttributes() {
    //Placeholder for easy search
    return {
      placeholder: "Search For A Trainer"
    }
  },

  //Index of all deleted trainers
  deletedTrainersIndex() {
    return DeletedTrainersIndex;
  },

  //Placeholder text of deleted trainers
  deletedTrainersAttributes() {
    //Placeholder for easy search
    return {
      placeholder: "Search For A Trainer"
    }
  },
});

Template.commandCenter.events({
  'click .removeTrainer' (event) {
    //Find the trainer to remove
    const curUser = Meteor.users.findOne({
      _id: this._id
    });

    //Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm the deletion of the trainer
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover" + " " + curUser.username,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, remove user!",
      closeOnConfirm: false
    }, (isConfirm) => {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Deleted!', 'User has been deleted.', 'success');
        Meteor.call("removeTrainer", curUser._id);
      } else {
        swal('Cancelled', 'Your user is safe now.', 'error');
      }
    });
  },

  'click .suspendTrainer' (event) {
    //Suspend the trainer clicked on
    Meteor.call("suspendTrainer", this._id);
  },

  //Payment due soon button to send email when their payment is due soon
  'click .paymentDueSoon' (event) {
    Meteor.call("paymentDueSoon", this.expiresOn, this._id, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        Bert.alert("Payment warning sent", 'success', 'growl-top-right');
      }
    });
  }
});
