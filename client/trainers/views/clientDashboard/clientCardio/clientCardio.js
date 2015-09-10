Template.clientCardio.onCreated(function () {
  var self = this;

  //Subscribe to the current clients cardio publication when
  //the cardio template is created
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsCardio", clientId);
  });
});

Template.clientCardioShell.onRendered(function () {
  //Pop up date picker when a date field is clicked on
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 225,
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

Template.clientCardioShell.helpers({
  //Find clients cardio based on url param
  currentClientsCardio: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    //Return current clients cardio to use as the doc for autoform
    return currentClientsCardio;
  },

  //calculate clients max heart rate
  maxHeartRate: function() {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    //Formula for max heart rate
    var maxHeartRate = 220 - currentClientsCardio.cardioProgramAge;

    return maxHeartRate;

  },

  //Week 1-4 starting heart rate
  startBeatsPerMinuteW14: function() {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    var startIntensityW14 = currentClientsCardio.cardioW14StartPercentIntensity / 100;

    var startBeatsPerMinutePart1 = currentClientsCardio.cardioW14StartMaxHeartRate - currentClientsCardio.cardioW14StartRestingHeartRate;
    var startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW14;
    var startBeatsPerMinuteW14 = startBeatsPerMinutePart2 + currentClientsCardio.cardioW14StartRestingHeartRate;

    return startBeatsPerMinuteW14;

  },

  //Week 1-4 ending heart rate
  endBeatsPerMinuteW14: function() {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    var endIntensityW14 = currentClientsCardio.cardioW14EndPercentIntensity / 100;

    var endBeatsPerMinutePart1 = currentClientsCardio.cardioW14EndMaxHeartRate - currentClientsCardio.cardioW14EndRestingHeartRate;
    var endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW14;
    var endBeatsPerMinuteW14 = endBeatsPerMinutePart2 + currentClientsCardio.cardioW14EndRestingHeartRate;

    return endBeatsPerMinuteW14;

  },

  startBeatsPerMinuteW58: function() {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    var startIntensityW58 = currentClientsCardio.cardioW58StartPercentIntensity / 100;

    var startBeatsPerMinutePart1 = currentClientsCardio.cardioW58StartMaxHeartRate - currentClientsCardio.cardioW58StartRestingHeartRate;
    var startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW58;
    var startBeatsPerMinuteW58 = startBeatsPerMinutePart2 + currentClientsCardio.cardioW58StartRestingHeartRate;

    return startBeatsPerMinuteW58;

  },

  endBeatsPerMinuteW58: function() {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    var endIntensityW58 = currentClientsCardio.cardioW58EndPercentIntensity / 100;

    var endBeatsPerMinutePart1 = currentClientsCardio.cardioW58EndMaxHeartRate - currentClientsCardio.cardioW58EndRestingHeartRate;
    var endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW58;
    var endBeatsPerMinuteW58 = endBeatsPerMinutePart2 + currentClientsCardio.cardioW58EndRestingHeartRate;

    return endBeatsPerMinuteW58;

  },

  startBeatsPerMinuteW912: function() {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    var startIntensityW912 = currentClientsCardio.cardioW912StartPercentIntensity / 100;

    var startBeatsPerMinutePart1 = currentClientsCardio.cardioW912StartMaxHeartRate - currentClientsCardio.cardioW912StartRestingHeartRate;
    var startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW912;
    var startBeatsPerMinuteW912 = startBeatsPerMinutePart2 + currentClientsCardio.cardioW912StartRestingHeartRate;

    return startBeatsPerMinuteW912;

  },

  endBeatsPerMinuteW912: function() {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    var endIntensityW912 = currentClientsCardio.cardioW912EndPercentIntensity / 100;

    var endBeatsPerMinutePart1 = currentClientsCardio.cardioW912EndMaxHeartRate - currentClientsCardio.cardioW912EndRestingHeartRate;
    var endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW912;
    var endBeatsPerMinuteW912 = endBeatsPerMinutePart2 + currentClientsCardio.cardioW912EndRestingHeartRate;

    return endBeatsPerMinuteW912;

  }
});
