Template.clientCardio.onCreated(function () {
  //Subscribe to the current clients cardio publication when
  //the cardio template is created
  this.autorun(() => {
    const clientId = FlowRouter.getParam('_id');
    this.subscribe("currentClientsCardio", clientId);
  });
});

Template.clientCardioShell.onRendered(() => {
  //Pop up date picker when a date field is clicked on
  $('#week1to4Start').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });

  $('#week1to4End').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });

  $('#week5to8Start').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });

  $('#week5to8End').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });

  $('#week9to12Start').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });

  $('#week9to12End').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
});

Template.clientCardioShell.helpers({
  //Find clients cardio based on url param
  currentClientsCardio() {
    const clientId = FlowRouter.getParam('_id');
    const currentClientsCardio = ClientCardio.findOne({
      whosCardio: clientId
    });

    //Return current clients cardio to use as the doc for autoform
    return currentClientsCardio;
  },

  //calculate clients max heart rate
  maxHeartRate() {
    const clientId = FlowRouter.getParam('_id');
    const currentClientsCardio = ClientCardio.findOne({
      whosCardio: clientId
    });

    //Formula for max heart rate
    let maxHeartRate = 220 - currentClientsCardio.cardioProgramAge;

    return maxHeartRate;
  },

  //Week 1-4 starting heart rate
  startBeatsPerMinuteW14() {
    const clientId = FlowRouter.getParam('_id');
    const currentClientsCardio = ClientCardio.findOne({
      whosCardio: clientId
    });

    let startIntensityW14 = currentClientsCardio.cardioW14StartPercentIntensity / 100;
    let startBeatsPerMinutePart1 = currentClientsCardio.cardioW14StartMaxHeartRate - currentClientsCardio.cardioW14StartRestingHeartRate;
    let startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW14;
    let startBeatsPerMinuteW14 = startBeatsPerMinutePart2 + currentClientsCardio.cardioW14StartRestingHeartRate;

    return startBeatsPerMinuteW14;
  },

  //Week 1-4 ending heart rate
  endBeatsPerMinuteW14() {
    const clientId = FlowRouter.getParam('_id');
    const currentClientsCardio = ClientCardio.findOne({
      whosCardio: clientId
    });

    let endIntensityW14 = currentClientsCardio.cardioW14EndPercentIntensity / 100;
    let endBeatsPerMinutePart1 = currentClientsCardio.cardioW14EndMaxHeartRate - currentClientsCardio.cardioW14EndRestingHeartRate;
    let endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW14;
    let endBeatsPerMinuteW14 = endBeatsPerMinutePart2 + currentClientsCardio.cardioW14EndRestingHeartRate;

    return endBeatsPerMinuteW14;
  },

  startBeatsPerMinuteW58() {
    const clientId = FlowRouter.getParam('_id');
    const currentClientsCardio = ClientCardio.findOne({
      whosCardio: clientId
    });

    let startIntensityW58 = currentClientsCardio.cardioW58StartPercentIntensity / 100;
    let startBeatsPerMinutePart1 = currentClientsCardio.cardioW58StartMaxHeartRate - currentClientsCardio.cardioW58StartRestingHeartRate;
    let startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW58;
    let startBeatsPerMinuteW58 = startBeatsPerMinutePart2 + currentClientsCardio.cardioW58StartRestingHeartRate;

    return startBeatsPerMinuteW58;
  },

  endBeatsPerMinuteW58() {
    const clientId = FlowRouter.getParam('_id');
    const currentClientsCardio = ClientCardio.findOne({
      whosCardio: clientId
    });

    let endIntensityW58 = currentClientsCardio.cardioW58EndPercentIntensity / 100;
    let endBeatsPerMinutePart1 = currentClientsCardio.cardioW58EndMaxHeartRate - currentClientsCardio.cardioW58EndRestingHeartRate;
    let endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW58;
    let endBeatsPerMinuteW58 = endBeatsPerMinutePart2 + currentClientsCardio.cardioW58EndRestingHeartRate;

    return endBeatsPerMinuteW58;
  },

  startBeatsPerMinuteW912() {
    const clientId = FlowRouter.getParam('_id');
    const currentClientsCardio = ClientCardio.findOne({
      whosCardio: clientId
    });

    let startIntensityW912 = currentClientsCardio.cardioW912StartPercentIntensity / 100;
    let startBeatsPerMinutePart1 = currentClientsCardio.cardioW912StartMaxHeartRate - currentClientsCardio.cardioW912StartRestingHeartRate;
    let startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW912;
    let startBeatsPerMinuteW912 = startBeatsPerMinutePart2 + currentClientsCardio.cardioW912StartRestingHeartRate;

    return startBeatsPerMinuteW912;
  },

  endBeatsPerMinuteW912() {
    const clientId = FlowRouter.getParam('_id');
    const currentClientsCardio = ClientCardio.findOne({
      whosCardio: clientId
    });

    let endIntensityW912 = currentClientsCardio.cardioW912EndPercentIntensity / 100;
    let endBeatsPerMinutePart1 = currentClientsCardio.cardioW912EndMaxHeartRate - currentClientsCardio.cardioW912EndRestingHeartRate;
    let endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW912;
    let endBeatsPerMinuteW912 = endBeatsPerMinutePart2 + currentClientsCardio.cardioW912EndRestingHeartRate;

    return endBeatsPerMinuteW912;
  }
});
