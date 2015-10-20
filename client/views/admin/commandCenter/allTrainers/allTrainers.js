Template.allTrainers.onCreated(function () {
  var self = this;

  //Subscribe to all trainers
  self.autorun(function () {
    self.subscribe("allTrainers");
  });
});

Template.allTrainers.helpers({
  //Find all trainers we are subscribed to
  trainer: function () {
    return Meteor.users.find({
      roles: "trainer"
    });
  }
});

Template.allTrainers.events({
  'click .removeTrainer': function (event) {
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
    Meteor.call("suspendUser", this._id);
  }
});
