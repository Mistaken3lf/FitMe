////////////////////////////////////////////////////////////////////////////////
Template.myStats.onCreated(function () {
  var self = this;

  //Subscribe to mystats and myprofile to get info from mongo
  self.autorun(function () {
    self.subscribe("myStats");
    self.subscribe("myProfile");
  });
});

////////////////////////////////////////////////////////////////////////////////

Template.myStats.helpers({
  //Get the current clients stats values
  myStats: function () {
    var myStats = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    //Return the stats object for the stats autoform doc
    return myStats;
  },

  //Get the clients profile info to display their name in the card title
  thisUser: function () {
    var thisUser = Meteor.users.findOne({
      'userProfile.whosProfile': Meteor.userId()
    });
    return thisUser;
  },
});

////////////////////////////////////////////////////////////////////////////////
