
Template.navigation.events({
  //Capture clicking logout button
  'click .logout': function(event) {

    //Prevent default action
    event.preventDefault();

    //Bring user back to home page after logging out
    FlowRouter.go('/');

    //Log user out
    Meteor.logout();
  }
});


Template.navigation.onRendered(function() {
  //Make mobile sidebar on left side collapsible
  $('.button-collapse').sideNav({
    edge: 'left',
    closeOnClick: true
  });
});


