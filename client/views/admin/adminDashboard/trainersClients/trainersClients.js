Template.trainersClients.onCreated(function () {
  var self = this;

  //Subscribe all the trainers current clients
  self.autorun(function () {
    var trainerId = FlowRouter.getParam('_id');
    self.subscribe("trainersClients", trainerId);
  });
});

Template.trainersClients.events({
  'click .deleteButton': function (event) {
    //Find client clicked on
    var curUser = Meteor.users.findOne({
      _id: this._id
    });
    
    //Needed for sweet alerts
    var previousWindowKeyDown = window.onkeydown;
    
    //Popup sweet alert to confirm delete
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
        Meteor.call("removeClient", curUser._id);
      } else {
        swal('Cancelled', 'Your client is safe now :)', 'error');
      }
    });
  },

  'click .suspendUser': function (event) {
    //Suspend user clicked on
    Meteor.call("suspendUser", this._id);
  }
});

Template.trainersClients.helpers({
  //Return all a trainer clients so we can search them
  //with easy search
  trainersClientsIndex: function () {
    return UsersIndex;
  },

  trainersClientsAttributes: function () {
    //Placeholder for easy search
    return {
      placeholder: "Search For A Client"
    }
  }
});