Template.myStats.onCreated(function () {
  var self = this;
  //Subscribe to mystats and myprofile to get info from mongo
  self.autorun(function () {
    self.subscribe("myStats");
    self.subscribe("myProfile");
  });
});

Template.myStatsShell.helpers({
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

  //Calculate clients body weight change from retest 1 and 3
  bodyWeightChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var bodyWeightChange = thisUser.statsRT3BodyWeight - thisUser.statsRT1BodyWeight;

    return bodyWeightChange;
  },

  //Calculate the body fat percent change from retest 1 and 3
  bodyFatPercentChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var bodyFatPercentChange = thisUser.statsRT3BodyFatPercent - thisUser.statsRT1BodyFatPercent;

    return bodyFatPercentChange;
  },

  //Calculate the change in clients pounds of body fat from retest 1 and 3
  changeInPounds: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var changeInPounds = thisUser.statsRT3BodyFatLbs - thisUser.statsRT1BodyFatLbs;

    return changeInPounds;
  },

  //Calculate clients change in lean mass from retest 1 and 3
  leanMass: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var leanMass = thisUser.statsRT3LeanMass - thisUser.statsRT1LeanMass;

    return leanMass;
  },

  //Calculate clients body fat lost from retest 1 and 3
  fatLost: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var fatLost = thisUser.statsRT3BodyFatLost - thisUser.statsRT1BodyFatLost;

    return fatLost;
  },

  //Calculate clients muscle gain from retest 1 and 3
  muscleGained: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var muscleGained = thisUser.statsRT3LeanMuscleGain - thisUser.statsRT1LeanMuscleGain;

    return muscleGained;
  },

  neckMeasureChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var neckMeasureChange = thisUser.measureRT3Neck - thisUser.measureRT1Neck;

    return neckMeasureChange;
  },

  chestMeasureChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var chestMeasureChange = thisUser.measureRT3Chest - thisUser.measureRT1Chest;

    return chestMeasureChange;
  },

  shoulderMeasureChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var shoulderMeasureChange = thisUser.measureRT3Shoulders - thisUser.measureRT1Shoulders;

    return shoulderMeasureChange;
  },

  waistMeasureChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var waistMeasureChange = thisUser.measureRT3Waist - thisUser.measureRT1Waist;

    return waistMeasureChange;
  },

  hipsMeasureChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var hipsMeasureChange = thisUser.measureRT3Hips - thisUser.measureRT1Hips;

    return hipsMeasureChange;
  },

  thighMeasureChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var thighMeasureChange = thisUser.measureRT3Thigh - thisUser.measureRT1Thigh;

    return thighMeasureChange;
  },

  calfMeasureChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var calfMeasureChange = thisUser.measureRT3Calf - thisUser.measureRT1Calf;

    return calfMeasureChange;
  },

  bicepMeasureChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var bicepMeasureChange = thisUser.measureRT3Bicep - thisUser.measureRT1Bicep;

    return bicepMeasureChange;
  },

  forearmMeasureChange: function () {
    var thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    var forearmMeasureChange = thisUser.measureRT3Forearm - thisUser.measureRT1Forearm;

    return forearmMeasureChange;
  }
});
