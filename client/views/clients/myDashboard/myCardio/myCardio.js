Template.myCardio.onCreated(function() {
  var self = this;

  //Subscribe to my cardio
  self.autorun(function() {
    self.subscribe("myCardio");
  });
});



Template.myCardioShell.helpers({
  //Find my cardio
  myCardio: function() {
    var myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });

    //Return myCardio for autform doc
    return myCardio;
  },

  //Calculate my max heart rate
  maxHeartRate: function() {
    var myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });

    //Formula for max heart rate
    var maxHeartRate = 220 - myCardio.cardioProgramAge;

    return maxHeartRate;
  },

  //Week 1-4 starting heart rate
  startBeatsPerMinuteW14: function() {
    var myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });

    var startIntensityW14 = myCardio.cardioW14StartPercentIntensity / 100;

    var startBeatsPerMinutePart1 = myCardio.cardioW14StartMaxHeartRate - myCardio.cardioW14StartRestingHeartRate;
    var startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW14;
    var startBeatsPerMinuteW14 = startBeatsPerMinutePart2 + myCardio.cardioW14StartRestingHeartRate;

    return startBeatsPerMinuteW14;
  },

  //Week 1-4 ending heart rate
  endBeatsPerMinuteW14: function() {
    var myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });

    var endIntensityW14 = myCardio.cardioW14EndPercentIntensity / 100;

    var endBeatsPerMinutePart1 = myCardio.cardioW14EndMaxHeartRate - myCardio.cardioW14EndRestingHeartRate;
    var endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW14;
    var endBeatsPerMinuteW14 = endBeatsPerMinutePart2 + myCardio.cardioW14EndRestingHeartRate;

    return endBeatsPerMinuteW14;
  },

  startBeatsPerMinuteW58: function() {
    var myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });

    var startIntensityW58 = myCardio.cardioW58StartPercentIntensity / 100;

    var startBeatsPerMinutePart1 = myCardio.cardioW58StartMaxHeartRate - myCardio.cardioW58StartRestingHeartRate;
    var startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW58;
    var startBeatsPerMinuteW58 = startBeatsPerMinutePart2 + myCardio.cardioW58StartRestingHeartRate;

    return startBeatsPerMinuteW58;
  },

  endBeatsPerMinuteW58: function() {
    var myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });

    var endIntensityW58 = myCardio.cardioW58EndPercentIntensity / 100;

    var endBeatsPerMinutePart1 = myCardio.cardioW58EndMaxHeartRate - myCardio.cardioW58EndRestingHeartRate;
    var endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW58;
    var endBeatsPerMinuteW58 = endBeatsPerMinutePart2 + myCardio.cardioW58EndRestingHeartRate;

    return endBeatsPerMinuteW58;
  },

  startBeatsPerMinuteW912: function() {
    var myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });

    var startIntensityW912 = myCardio.cardioW912StartPercentIntensity / 100;

    var startBeatsPerMinutePart1 = myCardio.cardioW912StartMaxHeartRate - myCardio.cardioW912StartRestingHeartRate;
    var startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW912;
    var startBeatsPerMinuteW912 = startBeatsPerMinutePart2 + myCardio.cardioW912StartRestingHeartRate;

    return startBeatsPerMinuteW912;
  },

  endBeatsPerMinuteW912: function() {
    var myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });

    var endIntensityW912 = myCardio.cardioW912EndPercentIntensity / 100;

    var endBeatsPerMinutePart1 = myCardio.cardioW912EndMaxHeartRate - myCardio.cardioW912EndRestingHeartRate;
    var endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW912;
    var endBeatsPerMinuteW912 = endBeatsPerMinutePart2 + myCardio.cardioW912EndRestingHeartRate;

    return endBeatsPerMinuteW912;
  }
});
