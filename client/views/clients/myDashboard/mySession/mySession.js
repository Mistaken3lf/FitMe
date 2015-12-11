Template.mySession.onCreated(function () {
  var self = this;

  //Subscribe to my profile to get my session information
  self.autorun(function () {
    self.subscribe("myProfile");
  });
});

Template.mySessionShell.helpers({
  //Return the current client
  thisClient: function () {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    });
  },

  //Get todays date
  todaysDate: function () {
    return new Date().toDateString();
  },

  startOfWeek: function () {
    let startOfWeek = moment().startOf("week").format("ddd. MMM Do");
    return startOfWeek;
  },

  endOfWeek: function () {
    let endOfWeek = moment().endOf("week").format("ddd. MMM Do");
    return endOfWeek;
  },

  mondayStatus: function () {
    let mondayStatus = Meteor.users.findOne({
      _id: Meteor.userId()
    });
    
    return mondayStatus.mondayStatus;
  }
});

Template.mySessionShell.events({
  'change #mondayStatus': function (event) {
    Meteor.call("mondayStatus", event.target.checked);
  },
  
  'change #tuesdayStatus': function (event) {
    Meteor.call("tuesdayStatus", event.target.checked);
  },
  
  'change #wednesdayStatus': function (event) {
    Meteor.call("wednesdayStatus", event.target.checked);
  },
  
  'change #thursdayStatus': function (event) {
    Meteor.call("thursdayStatus", event.target.checked);
  },
  
  'change #fridayStatus': function (event) {
    Meteor.call("fridayStatus", event.target.checked);
  },
  
  'change #saturdayStatus': function (event) {
    Meteor.call("saturdayStatus", event.target.checked);
  },
  
  'change #sundayStatus': function (event) {
    Meteor.call("sundayStatus", event.target.checked);
  }
});
