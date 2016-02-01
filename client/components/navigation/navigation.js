Template.navigation.events({
  //Capture clicking logout button
  'click .logout' (event) {
    //Prevent default action
    event.preventDefault();

    //Bring user back to home page after logging out
    FlowRouter.go('/');

    //Log user out
    Meteor.logout();
  }
});

Template.navigation.onRendered(() => {
  //Make mobile sidebar on left side collapsible
  $('.button-collapse').sideNav({
    menuWidth: 210,
    edge: 'left',
    closeOnClick: true
  });
});

Template.navigation.helpers({
  versionNumber() {
    //Current Project version
    return "1.0.9";
  }
});
