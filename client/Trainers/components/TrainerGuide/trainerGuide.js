Template.trainerGuideShell.onRendered(() => {
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

Template.trainerGuideShell.helpers({
  //Check if the user is logging in 
  isLoggingIn() {
    return Meteor.loggingIn();
  }
});