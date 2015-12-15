ClientStats = new Mongo.Collection("clientStats");

var ClientStatsSchema = {};

ClientStatsSchema.stats = new SimpleSchema({
  whosStats: {
    type: String,
  },

  createdBy: {
    type: String,
  },

  //Body Statistics Tnitial test
  statsITDate: {
    type: String,
    optional: true,
  },

  statsITBodyWeight: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsITBodyFatPercent: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsITBodyFatLbs: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsITLeanMass: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Body Statistics Initial Test

  //Body Statistics Retest 1
  statsRT1Date: {
    type: String,
    optional: true,
    decimal: true
  },

  statsRT1BodyWeight: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT1BodyFatPercent: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT1BodyFatLbs: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT1LeanMass: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT1BodyFatLost: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT1LeanMuscleGain: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Body Statistics Retest 1

  //Body Statistics Retest 2
  statsRT2Date: {
    type: String,
    optional: true
  },

  statsRT2BodyWeight: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT2BodyFatPercent: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT2BodyFatLbs: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT2LeanMass: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT2BodyFatLost: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT2LeanMuscleGain: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Body Statistics Retest 2

  //Body Statistics Retest 3
  statsRT3Date: {
    type: String,
    optional: true,
    decimal: true
  },

  statsRT3BodyWeight: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT3BodyFatPercent: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT3BodyFatLbs: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT3LeanMass: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT3BodyFatLost: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsRT3LeanMuscleGain: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Body Statistics Retest 3

  //Body Statistics Change
  statsChangeDate: {
    type: String,
    optional: true,
  },

  statsChangeBodyWeight: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsChangeBodyFatPercent: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsChangeBodyFatLbs: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsChangeLeanMass: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsChangeBodyFatLost: {
    type: Number,
    optional: true,
    decimal: true
  },

  statsChangeLeanMuscleGain: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Body Statistics Change

  //Measurement Initial Test
  measureITDate: {
    type: String,
    optional: true,
  },

  measureITNeck: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureITChest: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureITShoulders: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureITWaist: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureITHips: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureITThigh: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureITCalf: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureITBicep: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureITForearm: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Initial Test Measurements

  //Measurements Retest 1
  measureRT1Date: {
    type: String,
    optional: true,
    decimal: true
  },

  measureRT1Neck: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT1Chest: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT1Shoulders: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT1Waist: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT1Hips: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT1Thigh: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT1Calf: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT1Bicep: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT1Forearm: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Retest 1 Measurements

  //Measurements Retest 2
  measureRT2Date: {
    type: String,
    optional: true,
  },

  measureRT2Neck: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT2Chest: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT2Shoulders: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT2Waist: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT2Hips: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT2Thigh: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT2Calf: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT2Bicep: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT2Forearm: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Retest 2 Measurements

  //Measurements Retest 3
  measureRT3Date: {
    type: String,
    optional: true,
    decimal: true
  },

  measureRT3Neck: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT3Chest: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT3Shoulders: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT3Waist: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT3Hips: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT3Thigh: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT3Calf: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT3Bicep: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureRT3Forearm: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Retest 3 Measurements

  //Measurements Change
  measureChangeDate: {
    type: String,
    optional: true,
  },

  measureChangeNeck: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureChangeChest: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureChangeShoulders: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureChangeWaist: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureChangeHips: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureChangeThigh: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureChangeCalf: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureChangeBicep: {
    type: Number,
    optional: true,
    decimal: true
  },

  measureChangeForearm: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Retest 3 Measurements
});

//Attach schema to ClientStats
ClientStats.attachSchema(ClientStatsSchema.stats);

//Dont allow any client side inserts, updates, or removes
ClientStats.deny({
  insert() {
      return true
    },
    update() {
      return true
    },
    remove() {
      return true
    },
});
