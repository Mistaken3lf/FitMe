Template.myCardio.onCreated(function () {
  //Subscribe to my cardio
  this.autorun(() => {
    this.subscribe("myCardio");
  });
});

Template.myCardioShell.helpers({
  //Find my cardio
  myCardio() {
    const myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });

    //Return myCardio for autform doc
    return myCardio;
  },

  //Calculate my max heart rate
  maxHeartRate() {
    const myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });

    //Formula for max heart rate
    let maxHeartRate = 220 - myCardio.cardioProgramAge;

    return maxHeartRate;
  },

  //Week 1-4 starting heart rate
  startBeatsPerMinuteW14() {
    const myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });
    
    //Week 1-4 beginning calculations
    let startIntensityW14 = myCardio.cardioW14StartPercentIntensity / 100;
    let startBeatsPerMinutePart1 = myCardio.cardioW14StartMaxHeartRate - myCardio.cardioW14StartRestingHeartRate;
    let startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW14;
    let startBeatsPerMinuteW14 = startBeatsPerMinutePart2 + myCardio.cardioW14StartRestingHeartRate;

    return startBeatsPerMinuteW14;
  },

  //Week 1-4 ending heart rate
  endBeatsPerMinuteW14() {
    const myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });
    
    //Week 1-4 ending calculations
    let endIntensityW14 = myCardio.cardioW14EndPercentIntensity / 100;
    let endBeatsPerMinutePart1 = myCardio.cardioW14EndMaxHeartRate - myCardio.cardioW14EndRestingHeartRate;
    let endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW14;
    let endBeatsPerMinuteW14 = endBeatsPerMinutePart2 + myCardio.cardioW14EndRestingHeartRate;

    return endBeatsPerMinuteW14;
  },
  
  //Week 5-8 Start beats per minute
  startBeatsPerMinuteW58() {
    const myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });
    
    //Week 5-8 beginning calculations
    let startIntensityW58 = myCardio.cardioW58StartPercentIntensity / 100;
    let startBeatsPerMinutePart1 = myCardio.cardioW58StartMaxHeartRate - myCardio.cardioW58StartRestingHeartRate;
    let startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW58;
    let startBeatsPerMinuteW58 = startBeatsPerMinutePart2 + myCardio.cardioW58StartRestingHeartRate;

    return startBeatsPerMinuteW58;
  },
  
  //Week 5-8 End beats per minute
  endBeatsPerMinuteW58() {
    const myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });
    
    //Week 5-8 ending calculations
    let endIntensityW58 = myCardio.cardioW58EndPercentIntensity / 100;
    let endBeatsPerMinutePart1 = myCardio.cardioW58EndMaxHeartRate - myCardio.cardioW58EndRestingHeartRate;
    let endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW58;
    let endBeatsPerMinuteW58 = endBeatsPerMinutePart2 + myCardio.cardioW58EndRestingHeartRate;

    return endBeatsPerMinuteW58;
  },
  
  //Start beats for week 9-12
  startBeatsPerMinuteW912() {
    const myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });
    
    //Week 9-12 starting calculations
    let startIntensityW912 = myCardio.cardioW912StartPercentIntensity / 100;
    let startBeatsPerMinutePart1 = myCardio.cardioW912StartMaxHeartRate - myCardio.cardioW912StartRestingHeartRate;
    let startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW912;
    let startBeatsPerMinuteW912 = startBeatsPerMinutePart2 + myCardio.cardioW912StartRestingHeartRate;

    return startBeatsPerMinuteW912;
  },
  
  //End beats for week 9-12
  endBeatsPerMinuteW912() {
    const myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    });
    
    //Week 9-12 ending calculations
    let endIntensityW912 = myCardio.cardioW912EndPercentIntensity / 100;
    let endBeatsPerMinutePart1 = myCardio.cardioW912EndMaxHeartRate - myCardio.cardioW912EndRestingHeartRate;
    let endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW912;
    let endBeatsPerMinuteW912 = endBeatsPerMinutePart2 + myCardio.cardioW912EndRestingHeartRate;

    return endBeatsPerMinuteW912;
  }
});
