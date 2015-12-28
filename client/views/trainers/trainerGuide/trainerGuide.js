Template.trainerGuide.onRendered(() => {
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

Template.trainerGuide.helpers({
  //Check if the user is logging in 
  isLoggingIn() {
    return Meteor.loggingIn();
  }
});