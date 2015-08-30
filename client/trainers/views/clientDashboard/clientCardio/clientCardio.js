//Run when the cardio template is created
Template.clientCardio.onCreated(function () {
  var self = this;

  //Subscribe to the current clients cardio publication when
  //the cardio template is created
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsCardio", clientId);
  });
});

//Run when the cardio template is rendered on the page
Template.clientCardioShell.onRendered(function () {
  //Pop up date picker
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

//Helper functions for the cardio template
Template.clientCardioShell.helpers({
  //Find clients cardio based on url param
  currentClientsCardio: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    //Return current clients cardio to use as the doc for autoform
    return currentClientsCardio;
  },

  maxHeartRate: function() {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    var maxHeartRate = 220 - currentClientsCardio.cardioProgramAge;

    return maxHeartRate;

  },

  startBeatsPerMinuteW14: function() {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    var startIntensityW14 = currentClientsCardio.cardioW14StartPercentIntensity / 100;

    var startBeatsPerMinutePart1 = currentClientsCardio.cardioW14StartMaxHeartRate - currentClientsCardio.cardioW14StartRestingHeartRate;
    var startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW14;
    var startBeatsPerMinuteW14 = startBeatsPerMinutePart2 + currentClientsCardio.cardioW14StartRestingHeartRate;

    return startBeatsPerMinuteW14;

  },

  endBeatsPerMinuteW14: function() {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    var endIntensityW14 = currentClientsCardio.cardioW14EndPercentIntensity / 100;

    var endBeatsPerMinutePart1 = currentClientsCardio.cardioW14EndMaxHeartRate - currentClientsCardio.cardioW14EndRestingHeartRate;
    var endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW14;
    var endBeatsPerMinuteW14 = endBeatsPerMinutePart2 + currentClientsCardio.cardioW14EndRestingHeartRate;

    return endBeatsPerMinuteW14;

  }
});
