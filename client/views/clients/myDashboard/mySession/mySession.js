Template.mySession.onCreated(function () {
  //Subscribe to my profile to get my session information
  this.autorun(() => {
    this.subscribe("myProfile");
  });
});

Template.mySessionShell.helpers({
  //Return the current client
  thisClient() {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    });
  },

  //Get todays date
  todaysDate() {
    return new Date().toDateString();
  },
  
  //Get starting date of week
  startOfWeek() {
    let startOfWeek = moment().startOf("week").format("ddd. MMM Do");
    return startOfWeek;
  },
  
  //Get ending day of week
  endOfWeek() {
    let endOfWeek = moment().endOf("week").format("ddd. MMM Do");
    return endOfWeek;
  }
});

Template.mySessionShell.events({
  'change #mondayStatus' (event) {
    Meteor.call("mondayStatus", event.target.checked);
  },

  'change #tuesdayStatus' (event) {
    Meteor.call("tuesdayStatus", event.target.checked);
  },

  'change #wednesdayStatus' (event) {
    Meteor.call("wednesdayStatus", event.target.checked);
  },

  'change #thursdayStatus' (event) {
    Meteor.call("thursdayStatus", event.target.checked);
  },

  'change #fridayStatus' (event) {
    Meteor.call("fridayStatus", event.target.checked);
  },

  'change #saturdayStatus' (event) {
    Meteor.call("saturdayStatus", event.target.checked);
  },

  'change #sundayStatus' (event) {
    Meteor.call("sundayStatus", event.target.checked);
  }
});
