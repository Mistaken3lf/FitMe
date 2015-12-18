Template.navigation.onCreated(function () {
  var self = this;

  self.autorun(function () {
    //Subscribe to my profile info
    self.subscribe("myStatus");
  });
});

Template.navigation.events({
  //Capture clicking logout button
  'click .logout': function (event) {

    //Prevent default action
    event.preventDefault();

    //Bring user back to home page after logging out
    FlowRouter.go('/');

    //Log user out
    Meteor.logout();
  }
});

Template.navigation.onRendered(function () {
  //Make mobile sidebar on left side collapsible
  $('.button-collapse').sideNav({
    menuWidth: 210,
    edge: 'left',
    closeOnClick: true
  });
});

Template.navigation.helpers({
  versionNumber: function () {
    return "15.12.6";
  },

  isSuspended() {
    let thisTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });
  
    if (thisTrainer.userStatus == "suspended") {
      return true;
    } else {
      return false;
    }
  },

  suspendedTrainer() {
    let thisTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });
    
    if ((thisTrainer.userStatus == "suspended") && (Roles.userIsInRole(Meteor.userId(), "trainer"))) {
      return true;
    } else {
      return false;
    }
  },
  
  validTrainer() {
    let thisTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });
    
    if ((thisTrainer.userStatus == "active") && (Roles.userIsInRole(Meteor.userId(), "trainer"))) {
      return true;
    } else {
      return false;
    }
  },
})
