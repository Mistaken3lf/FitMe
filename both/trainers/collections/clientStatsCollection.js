ClientStats = new Mongo.Collection("clientStats");

var ClientStatsSchema = {};

ClientStatsSchema.stats = new SimpleSchema({
  whosStats: {
    type: String,
  },

  createdBy: {
    type: String,
  },

  bodyFat: {
    type: String,
    optional: true
  }

});

ClientStats.attachSchema(ClientStatsSchema.stats);
