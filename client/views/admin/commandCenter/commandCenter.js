Template.commandCenter.onCreated(function () {
  var self = this;

  //Subscribe to all current users
  self.autorun(function () {
    self.subscribe("allUsers");
  });
});

Template.commandCenter.helpers({
  //Total number of trainers 
  totalTrainers: function () {
    totalTrainers = Meteor.users.find({
      roles: 'trainer'
    }).count();

    return totalTrainers;
  },
  
  //Total number of clients
  totalClients: function () {
    totalClients = Meteor.users.find({
      roles: 'client'
    }).count();

    return totalClients;
  },
  
  //Total user count
  totalUsers: function () {
    totalUsers = Meteor.users.find({
      _id: {
        $ne: Meteor.userId()
      }
    }).count();

    return totalUsers;
  },

  //Find all trainers we are subscribed to
  trainer: function () {
    return Meteor.users.find({
      roles: "trainer"
    });
  },

  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },
  
  //Return all a trainer clients so we can search them
  //with easy search
  currentTrainersIndex: function () {
    return CurrentTrainersIndex;
  },

  currentTrainersAttributes: function () {
    //Placeholder for easy search
    return {
      placeholder: "Search For A Trainer"
    }
  }
});

Template.commandCenter.events({
  'click .removeTrainer': function (event) {
    //Find the trainer to remove
    var curUser = Meteor.users.findOne({
      _id: this._id
    });
    
    //Needed for sweet alerts
    var previousWindowKeyDown = window.onkeydown;
    
    //Sweet alert to confirm the deletion of the trainer
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover" + " " + curUser.username,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, remove user!!!",
      closeOnConfirm: false
    }, function (isConfirm) {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Deleted!', 'User has been deleted.', 'success');
        Meteor.call("removeTrainer", curUser._id);
      } else {
        swal('Cancelled', 'Your user is safe now :)', 'error');
      }
    });
  },

  'click .suspendUser': function (event) {
    //Suspend the trainer clicked on
    Meteor.call("suspendUser", this._id);
  }
});
