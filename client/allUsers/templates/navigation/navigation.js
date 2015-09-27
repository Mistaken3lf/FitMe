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

//Collapse admin nav on mobile
Template.adminNav.onRendered(function () {
  //Make mobile sidebar on left side collapsible
  $('.button-collapse').sideNav({
    edge: 'left',
    closeOnClick: true
  });
});

//Collapse trainer nav on mobile
Template.trainerNav.onRendered(function () {
  //Make mobile sidebar on left side collapsible
  $('.button-collapse').sideNav({
    edge: 'left',
    closeOnClick: true
  });
});

//Collapse client nav on mobile
Template.clientNav.onRendered(function () {
  //Make mobile sidebar on left side collapsible
  $('.button-collapse').sideNav({
    edge: 'left',
    closeOnClick: true
  });
});

//Collapse logged out nav on mobile
Template.loggedOutNav.onRendered(function () {
  //Make mobile sidebar on left side collapsible
  $('.button-collapse').sideNav({
    edge: 'left',
    closeOnClick: true
  });
});
