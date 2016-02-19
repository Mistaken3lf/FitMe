Template.commandCenter.helpers({
  CommandCenter() {
    return CommandCenter;
  }
})

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
