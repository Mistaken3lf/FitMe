Template.clientStats.onCreated(function () {
  //Subscribe to the current clients stats based on url param
  this.autorun(() => {
    const clientId = FlowRouter.getParam('_id');
    this.subscribe("currentClientsStats", clientId);
  });
});

Template.clientStatsShell.onRendered(() => {
  //Pop up date picker when a date field is selected
  $('#statsITDate').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  $('#statsRT1Date').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  $('#statsRT2Date').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  $('#statsRT3Date').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  $('#measureITDate').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  $('#statsChangeDate').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  $('#measureRT1Date').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  $('#measureRT2Date').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  $('#measureRT3Date').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
  
  $('#measureChangeDate').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
});

Template.clientStatsShell.helpers({
  //Get the current clients stats values
  currentClientsStats() {
    const clientId = FlowRouter.getParam('_id');
    const currentClientsStats = ClientStats.findOne({
      whosStats: clientId
    });

    //Return the stats object for the stats autoform doc
    return currentClientsStats;
  },

  //Get the currrent clients profile info to display their first and
  //last name
  currentClient() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = Meteor.users.findOne({
      'userProfile.whosProfile': clientId
    });
    return currentClient;
  },

  //Calculate clients body weight change from retest 1 and 3
  bodyWeightChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let bodyWeightChange = currentClient.statsRT3BodyWeight - currentClient.statsRT1BodyWeight;

    return bodyWeightChange;
  },

  //Calculate the body fat percent change from retest 1 and 3
  bodyFatPercentChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let bodyFatPercentChange = currentClient.statsRT3BodyFatPercent - currentClient.statsRT1BodyFatPercent;

    return bodyFatPercentChange;
  },

  //Calculate the change in clients pounds of body fat from retest 1 and 3
  changeInPounds() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let changeInPounds = currentClient.statsRT3BodyFatLbs - currentClient.statsRT1BodyFatLbs;

    return changeInPounds;
  },

  //Calculate clients change in lean mass from retest 1 and 3
  leanMass() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let leanMass = currentClient.statsRT3LeanMass - currentClient.statsRT1LeanMass;

    return leanMass;
  },

  //Calculate clients body fat lost from retest 1 and 3
  fatLost() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let fatLost = currentClient.statsRT3BodyFatLost - currentClient.statsRT1BodyFatLost;

    return fatLost;
  },

  //Calculate clients muscle gain from retest 1 and 3
  muscleGained() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let muscleGained = currentClient.statsRT3LeanMuscleGain - currentClient.statsRT1LeanMuscleGain;

    return muscleGained;
  },
  
  //Calculate neck measurement change
  neckMeasureChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let neckMeasureChange = currentClient.measureRT3Neck - currentClient.measureRT1Neck;

    return neckMeasureChange;
  },
  
  //Calculate chest measurement change
  chestMeasureChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let chestMeasureChange = currentClient.measureRT3Chest - currentClient.measureRT1Chest;

    return chestMeasureChange;
  },
  
  //Calculate shoulder measurement change
  shoulderMeasureChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let shoulderMeasureChange = currentClient.measureRT3Shoulders - currentClient.measureRT1Shoulders;

    return shoulderMeasureChange;
  },
  
  //Calculate waist measurement change
  waistMeasureChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let waistMeasureChange = currentClient.measureRT3Waist - currentClient.measureRT1Waist;

    return waistMeasureChange;
  },
  
  //Calculate hip measurement change
  hipsMeasureChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var hipsMeasureChange = currentClient.measureRT3Hips - currentClient.measureRT1Hips;

    return hipsMeasureChange;
  },
  
  //Calculate thigh measurement change
  thighMeasureChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let thighMeasureChange = currentClient.measureRT3Thigh - currentClient.measureRT1Thigh;

    return thighMeasureChange;
  },
  
  //Calculate calf measurement change
  calfMeasureChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let calfMeasureChange = currentClient.measureRT3Calf - currentClient.measureRT1Calf;

    return calfMeasureChange;
  },
  
  //Calculate bicep measurement change
  bicepMeasureChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let bicepMeasureChange = currentClient.measureRT3Bicep - currentClient.measureRT1Bicep;

    return bicepMeasureChange;
  },
  
  //Calculate forearm measurement change
  forearmMeasureChange() {
    const clientId = FlowRouter.getParam('_id');
    const currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    let forearmMeasureChange = currentClient.measureRT3Forearm - currentClient.measureRT1Forearm;

    return forearmMeasureChange;
  }
});
