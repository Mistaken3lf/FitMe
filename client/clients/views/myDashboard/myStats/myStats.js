//Run when the client stats template is created
Template.myStats.onCreated(function () {
  var self = this;

  //Subscribe to the current clients stats based on url param
  self.autorun(function () {
    self.subscribe("myStats");
    self.subscribe("myProfile");
  });
});

//Run when stats template is rendered
Template.myStats.onRendered(function () {
  //Pop up date picker
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

//Helper functions for the stats template
Template.myStats.helpers({
  //Get the current clients stats values
  myStats: function () {
    var myStats = ClientStats.findOne({whosStats: Meteor.userId()});

    //Return the stats object for the stats autoform doc
    return myStats;
  },

  //Get the currrent clients profile info to display their first and
  //last name
  thisUser: function () {
    var thisUser = Meteor.users.findOne({'userProfile.whosProfile': Meteor.userId()});
    return thisUser;
  },
});
