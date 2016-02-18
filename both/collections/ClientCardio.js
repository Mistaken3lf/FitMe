ClientCardio = new Mongo.Collection("clientCardio");

ClientCardio.schema = new SimpleSchema({
  whosCardio: {
    type: String,
  },

  createdBy: {
    type: String,
  },

  //Cardio Program Basics
  cardioProgramAge: {
    type: Number,
    optional: true,
  },

  cardioProgramRestingHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioProgramMaxHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },
  //End Of Cardio Program Basics

  //Cardio Program Weeks 1 - 4
  cardioW14StartDate: {
    type: String,
    optional: true,
  },

  cardioW14StartMaxHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW14StartRestingHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW14StartPercentIntensity: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW14StartBPM: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW14EndDate: {
    type: String,
    optional: true,
  },

  cardioW14EndMaxHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW14EndRestingHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW14EndPercentIntensity: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW14EndBPM: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW14Beginner: {
    type: String,
    optional: true,
    decimal: true
  },

  cardioW14Intermediate: {
    type: String,
    optional: true,
    decimal: true
  },

  cardioW14Advanced: {
    type: String,
    optional: true,
    decimal: true
  },

  cardioW14Type: {
    type: String,
    optional: true,
    decimal: true
  },
  //End Of Cardio Program Weeks 1 - 4

  //Cardio Program Weeks 5 - 8
  cardioW58StartDate: {
    type: String,
    optional: true,
  },

  cardioW58StartMaxHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW58StartRestingHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW58StartPercentIntensity: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW58StartBPM: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW58EndDate: {
    type: String,
    optional: true,
  },

  cardioW58EndMaxHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW58EndRestingHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW58EndPercentIntensity: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW58EndBPM: {
    type: Number,
    optional: true,
  },

  cardioW58Beginner: {
    type: String,
    optional: true,
    decimal: true
  },

  cardioW58Intermediate: {
    type: String,
    optional: true,
    decimal: true
  },

  cardioW58Advanced: {
    type: String,
    optional: true,
    decimal: true
  },

  cardioW58Type: {
    type: String,
    optional: true,
    decimal: true
  },
  //End Of Cardio Program Weeks 5 - 8

  //Cardio Program Weeks 9 - 12
  cardioW912StartDate: {
    type: String,
    optional: true,
  },

  cardioW912StartMaxHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW912StartRestingHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW912StartPercentIntensity: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW912StartBPM: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW912EndDate: {
    type: String,
    optional: true,
  },

  cardioW912EndMaxHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW912EndRestingHeartRate: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW912EndPercentIntensity: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW912EndBPM: {
    type: Number,
    optional: true,
    decimal: true
  },

  cardioW912Beginner: {
    type: String,
    optional: true,
    decimal: true
  },

  cardioW912Intermediate: {
    type: String,
    optional: true,
    decimal: true
  },

  cardioW912Advanced: {
    type: String,
    optional: true,
    decimal: true
  },

  cardioW912Type: {
    type: String,
    optional: true,
    decimal: true
  },
  //End Of Cardio Program Weeks 9 - 12
});

//Attach schema to ClientCardio
ClientCardio.attachSchema(ClientCardio.schema);

//Dont allow any client side inserts, updates, or removes
ClientCardio.deny({
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