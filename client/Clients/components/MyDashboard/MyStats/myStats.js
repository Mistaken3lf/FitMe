Template.myStats.onCreated(function () {
  //Subscribe to mystats and myprofile to get info from mongo
  this.autorun(() => {
    this.subscribe("myStats");
    this.subscribe("myProfile");
  });
});

Template.myStatsShell.helpers({
  //Get the current clients stats values
  myStats() {
    const myStats = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    //Return the stats object for the stats autoform doc
    return myStats;
  },

  //Get the clients profile info to display their name in the card title
  thisUser() {
    const thisUser = Meteor.users.findOne({
      whosProfile: Meteor.userId()
    });
    
    return thisUser;
  },

  //Calculate clients body weight change from retest 1 and 3
  bodyWeightChange() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let bodyWeightChange = thisUser.statsRT3BodyWeight - thisUser.statsRT1BodyWeight;

    return bodyWeightChange;
  },

  //Calculate the body fat percent change from retest 1 and 3
  bodyFatPercentChange() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let bodyFatPercentChange = thisUser.statsRT3BodyFatPercent - thisUser.statsRT1BodyFatPercent;

    return bodyFatPercentChange;
  },

  //Calculate the change in clients pounds of body fat from retest 1 and 3
  changeInPounds() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let changeInPounds = thisUser.statsRT3BodyFatLbs - thisUser.statsRT1BodyFatLbs;

    return changeInPounds;
  },

  //Calculate clients change in lean mass from retest 1 and 3
  leanMass() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let leanMass = thisUser.statsRT3LeanMass - thisUser.statsRT1LeanMass;

    return leanMass;
  },

  //Calculate clients body fat lost from retest 1 and 3
  fatLost() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let fatLost = thisUser.statsRT3BodyFatLost - thisUser.statsRT1BodyFatLost;

    return fatLost;
  },

  //Calculate clients muscle gain from retest 1 and 3
  muscleGained() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let muscleGained = thisUser.statsRT3LeanMuscleGain - thisUser.statsRT1LeanMuscleGain;

    return muscleGained;
  },
  
  //Calculate change in neck measurement
  neckMeasureChange() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let neckMeasureChange = thisUser.measureRT3Neck - thisUser.measureRT1Neck;

    return neckMeasureChange;
  },
  
  //Calculate change in chest measurement
  chestMeasureChange() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let chestMeasureChange = thisUser.measureRT3Chest - thisUser.measureRT1Chest;

    return chestMeasureChange;
  },
  
  //Calculate change in shoulder measurement
  shoulderMeasureChange() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let shoulderMeasureChange = thisUser.measureRT3Shoulders - thisUser.measureRT1Shoulders;

    return shoulderMeasureChange;
  },
  
  //Calculate change in waist measurement
  waistMeasureChange() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let waistMeasureChange = thisUser.measureRT3Waist - thisUser.measureRT1Waist;

    return waistMeasureChange;
  },
  
  //Calculate change in hip measurement
  hipsMeasureChange() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let hipsMeasureChange = thisUser.measureRT3Hips - thisUser.measureRT1Hips;

    return hipsMeasureChange;
  },
  
  //Calculate change in thigh measurement
  thighMeasureChange() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let thighMeasureChange = thisUser.measureRT3Thigh - thisUser.measureRT1Thigh;

    return thighMeasureChange;
  },
  
  //Calculate change in calf measurement
  calfMeasureChange() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let calfMeasureChange = thisUser.measureRT3Calf - thisUser.measureRT1Calf;

    return calfMeasureChange;
  },
  
  //Calculate change in biceps
  bicepMeasureChange () {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let bicepMeasureChange = thisUser.measureRT3Bicep - thisUser.measureRT1Bicep;

    return bicepMeasureChange;
  },
  
  //Calculate forearm measurement change
  forearmMeasureChange() {
    const thisUser = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    let forearmMeasureChange = thisUser.measureRT3Forearm - thisUser.measureRT1Forearm;

    return forearmMeasureChange;
  }
});
