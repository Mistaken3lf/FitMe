Template.trainersClients.onCreated(function () {
  //Subscribe all the trainers current clients
  this.autorun(() => {
    const trainerId = FlowRouter.getParam('_id');
    this.subscribe("trainersClients", trainerId);
  });
});

Template.trainersClients.events({
  'click .deleteButton' (event) {
    //Find client clicked on
    const curUser = Meteor.users.findOne({
      _id: this._id
    });

    //Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    //Popup sweet alert to confirm delete
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
        swal('Deleted!', 'Client has been deleted.', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("removeClient", curUser._id);
      } else {
        swal('Cancelled', 'Your client is safe now :)', 'error');
      }
    });
  },

  'click .suspendClientAdmin' (event) {
    //Suspend user clicked on
    Meteor.call("suspendClientAdmin", this._id);
  }
});

Template.trainersClients.helpers({
  //Return all a trainer clients so we can search them
  //with easy search
  trainersClientsIndex() {
      return TrainersClientsIndex;
  },

  //Placeholder for easy search
  trainersClientsAttributes() {
    //Placeholder for easy search
    return {
      placeholder: "Search For A Client"
    }
  }
});