ClientCardio = new Mongo.Collection("clientCardio");

var ClientCardioSchema = {};

ClientCardioSchema.cardio = new SimpleSchema({
  whosCardio: {
    type: String,
  },

  createdBy: {
    type: String,
  },

  ////////////////////////////////////////////////////////////////////////////////

  //Cardio Program Basics
  cardioProgramAge: {
    type: Number,
    optional: true,
  },

  cardioProgramRestingHeartRate: {
    type: Number,
    optional: true,
  },

  cardioProgramMaxHeartRate: {
    type: Number,
    optional: true,
  },
  //End Of Cardio Program Basics

  ////////////////////////////////////////////////////////////////////////////////

  //Cardio Program Weeks 1 - 4
  cardioW14StartDate: {
    type: Date,
    optional: true,
  },

  cardioW14StartMaxHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW14StartRestingHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW14StartPercentIntensity: {
    type: Number,
    optional: true,
  },

  cardioW14StartBPM: {
    type: Number,
    optional: true,
  },

  cardioW14EndDate: {
    type: Date,
    optional: true,
  },

  cardioW14EndMaxHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW14EndRestingHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW14EndPercentIntensity: {
    type: Number,
    optional: true,
  },

  cardioW14EndBPM: {
    type: Number,
    optional: true,
  },

  cardioW14Beginner: {
    type: String,
    optional: true,
  },

  cardioW14Intermediate: {
    type: String,
    optional: true,
  },

  cardioW14Advanced: {
    type: String,
    optional: true,
  },

  cardioW14Type: {
    type: String,
    optional: true,
  },
  //End Of Cardio Program Weeks 1 - 4

  ////////////////////////////////////////////////////////////////////////////////

  //Cardio Program Weeks 5 - 8
  cardioW58StartDate: {
    type: Date,
    optional: true,
  },

  cardioW58StartMaxHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW58StartRestingHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW58StartPercentIntensity: {
    type: Number,
    optional: true,
  },

  cardioW58StartBPM: {
    type: Number,
    optional: true,
  },

  cardioW58EndDate: {
    type: Date,
    optional: true,
  },

  cardioW58EndMaxHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW58EndRestingHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW58EndPercentIntensity: {
    type: Number,
    optional: true,
  },

  cardioW58EndBPM: {
    type: Number,
    optional: true,
  },

  cardioW58Beginner: {
    type: String,
    optional: true,
  },

  cardioW58Intermediate: {
    type: String,
    optional: true,
  },

  cardioW58Advanced: {
    type: String,
    optional: true,
  },

  cardioW58Type: {
    type: String,
    optional: true,
  },
  //End Of Cardio Program Weeks 5 - 8

  ////////////////////////////////////////////////////////////////////////////////

  //Cardio Program Weeks 9 - 12
  cardioW912StartDate: {
    type: Date,
    optional: true,
  },

  cardioW912StartMaxHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW912StartRestingHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW912StartPercentIntensity: {
    type: Number,
    optional: true,
  },

  cardioW912StartBPM: {
    type: Number,
    optional: true,
  },

  cardioW912EndDate: {
    type: Date,
    optional: true,
  },

  cardioW912EndMaxHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW912EndRestingHeartRate: {
    type: Number,
    optional: true,
  },

  cardioW912EndPercentIntensity: {
    type: Number,
    optional: true,
  },

  cardioW912EndBPM: {
    type: Number,
    optional: true,
  },

  cardioW912Beginner: {
    type: String,
    optional: true,
  },

  cardioW912Intermediate: {
    type: String,
    optional: true,
  },

  cardioW912Advanced: {
    type: String,
    optional: true,
  },

  cardioW912Type: {
    type: String,
    optional: true,
  },
  //End Of Cardio Program Weeks 9 - 12
});

ClientCardio.attachSchema(ClientCardioSchema.cardio);
