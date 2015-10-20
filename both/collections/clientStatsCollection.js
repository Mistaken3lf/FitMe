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
    type: Date,
    optional: true,
  },

  statsITBodyWeight: {
    type: Number,
    optional: true,
  },

  statsITBodyFatPercent: {
    type: Number,
    optional: true,
  },

  statsITBodyFatLbs: {
    type: Number,
    optional: true,
  },

  statsITLeanMass: {
    type: Number,
    optional: true,
  },
  //End Of Body Statistics Initial Test



  //Body Statistics Retest 1
  statsRT1Date: {
    type: Date,
    optional: true,
  },

  statsRT1BodyWeight: {
    type: Number,
    optional: true,
  },

  statsRT1BodyFatPercent: {
    type: Number,
    optional: true,
  },

  statsRT1BodyFatLbs: {
    type: Number,
    optional: true,
  },

  statsRT1LeanMass: {
    type: Number,
    optional: true,
  },

  statsRT1BodyFatLost: {
    type: Number,
    optional: true,
  },

  statsRT1LeanMuscleGain: {
    type: Number,
    optional: true,
  },
  //End Of Body Statistics Retest 1



  //Body Statistics Retest 2
  statsRT2Date: {
    type: Date,
    optional: true,
  },

  statsRT2BodyWeight: {
    type: Number,
    optional: true,
  },

  statsRT2BodyFatPercent: {
    type: Number,
    optional: true,
  },

  statsRT2BodyFatLbs: {
    type: Number,
    optional: true,
  },

  statsRT2LeanMass: {
    type: Number,
    optional: true,
  },

  statsRT2BodyFatLost: {
    type: Number,
    optional: true,
  },

  statsRT2LeanMuscleGain: {
    type: Number,
    optional: true,
  },
  //End Of Body Statistics Retest 2

  //Body Statistics Retest 3
  statsRT3Date: {
    type: Date,
    optional: true,
  },

  statsRT3BodyWeight: {
    type: Number,
    optional: true,
  },

  statsRT3BodyFatPercent: {
    type: Number,
    optional: true,
  },

  statsRT3BodyFatLbs: {
    type: Number,
    optional: true,
  },

  statsRT3LeanMass: {
    type: Number,
    optional: true,
  },

  statsRT3BodyFatLost: {
    type: Number,
    optional: true,
  },

  statsRT3LeanMuscleGain: {
    type: Number,
    optional: true,
  },
  //End Of Body Statistics Retest 3

  //Body Statistics Change
  statsChangeDate: {
    type: Date,
    optional: true,
  },

  statsChangeBodyWeight: {
    type: Number,
    optional: true,
  },

  statsChangeBodyFatPercent: {
    type: Number,
    optional: true,
  },

  statsChangeBodyFatLbs: {
    type: Number,
    optional: true,
  },

  statsChangeLeanMass: {
    type: Number,
    optional: true,
  },

  statsChangeBodyFatLost: {
    type: Number,
    optional: true,
  },

  statsChangeLeanMuscleGain: {
    type: Number,
    optional: true,
  },
  //End Of Body Statistics Change

  //Measurement Initial Test
  measureITDate: {
    type: Date,
    optional: true,
  },

  measureITNeck: {
    type: Number,
    optional: true,
  },

  measureITChest: {
    type: Number,
    optional: true,
  },

  measureITShoulders: {
    type: Number,
    optional: true,
  },

  measureITWaist: {
    type: Number,
    optional: true,
  },

  measureITHips: {
    type: Number,
    optional: true,
  },

  measureITThigh: {
    type: Number,
    optional: true,
  },

  measureITCalf: {
    type: Number,
    optional: true,
  },

  measureITBicep: {
    type: Number,
    optional: true,
  },

  measureITForearm: {
    type: Number,
    optional: true,
  },
  //End Of Initial Test Measurements

  //Measurements Retest 1
  measureRT1Date: {
    type: Date,
    optional: true,
  },

  measureRT1Neck: {
    type: Number,
    optional: true,
  },

  measureRT1Chest: {
    type: Number,
    optional: true,
  },

  measureRT1Shoulders: {
    type: Number,
    optional: true,
  },

  measureRT1Waist: {
    type: Number,
    optional: true,
  },

  measureRT1Hips: {
    type: Number,
    optional: true,
  },

  measureRT1Thigh: {
    type: Number,
    optional: true,
  },

  measureRT1Calf: {
    type: Number,
    optional: true,
  },

  measureRT1Bicep: {
    type: Number,
    optional: true,
  },

  measureRT1Forearm: {
    type: Number,
    optional: true,
  },
  //End Of Retest 1 Measurements

  //Measurements Retest 2
  measureRT2Date: {
    type: Date,
    optional: true,
  },

  measureRT2Neck: {
    type: Number,
    optional: true,
  },

  measureRT2Chest: {
    type: Number,
    optional: true,
  },

  measureRT2Shoulders: {
    type: Number,
    optional: true,
  },

  measureRT2Waist: {
    type: Number,
    optional: true,
  },

  measureRT2Hips: {
    type: Number,
    optional: true,
  },

  measureRT2Thigh: {
    type: Number,
    optional: true,
  },

  measureRT2Calf: {
    type: Number,
    optional: true,
  },

  measureRT2Bicep: {
    type: Number,
    optional: true,
  },

  measureRT2Forearm: {
    type: Number,
    optional: true,
  },
  //End Of Retest 2 Measurements

  //Measurements Retest 3
  measureRT3Date: {
    type: Date,
    optional: true,
  },

  measureRT3Neck: {
    type: Number,
    optional: true,
  },

  measureRT3Chest: {
    type: Number,
    optional: true,
  },

  measureRT3Shoulders: {
    type: Number,
    optional: true,
  },

  measureRT3Waist: {
    type: Number,
    optional: true,
  },

  measureRT3Hips: {
    type: Number,
    optional: true,
  },

  measureRT3Thigh: {
    type: Number,
    optional: true,
  },

  measureRT3Calf: {
    type: Number,
    optional: true,
  },

  measureRT3Bicep: {
    type: Number,
    optional: true,
  },

  measureRT3Forearm: {
    type: Number,
    optional: true,
  },
  //End Of Retest 3 Measurements

  //Measurements Change
  measureChangeDate: {
    type: Date,
    optional: true,
  },

  measureChangeNeck: {
    type: Number,
    optional: true,
  },

  measureChangeChest: {
    type: Number,
    optional: true,
  },

  measureChangeShoulders: {
    type: Number,
    optional: true,
  },

  measureChangeWaist: {
    type: Number,
    optional: true,
  },

  measureChangeHips: {
    type: Number,
    optional: true,
  },

  measureChangeThigh: {
    type: Number,
    optional: true,
  },

  measureChangeCalf: {
    type: Number,
    optional: true,
  },

  measureChangeBicep: {
    type: Number,
    optional: true,
  },

  measureChangeForearm: {
    type: Number,
    optional: true,
  },
  //End Of Retest 3 Measurements
});

ClientStats.attachSchema(ClientStatsSchema.stats);
