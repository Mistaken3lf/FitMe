Template.clientStats.onCreated(function () {
  var self = this;

  //Subscribe to the current clients stats based on url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsStats", clientId);
  });
});

Template.clientStatsShell.onRendered(function () {
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
  currentClientsStats: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsStats = ClientStats.findOne({
      whosStats: clientId
    });

    //Return the stats object for the stats autoform doc
    return currentClientsStats;
  },

  //Get the currrent clients profile info to display their first and
  //last name
  currentClient: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = Meteor.users.findOne({
      'userProfile.whosProfile': clientId
    });
    return currentClient;
  },

  //Calculate clients body weight change from retest 1 and 3
  bodyWeightChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var bodyWeightChange = currentClient.statsRT3BodyWeight - currentClient.statsRT1BodyWeight;

    return bodyWeightChange;
  },

  //Calculate the body fat percent change from retest 1 and 3
  bodyFatPercentChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var bodyFatPercentChange = currentClient.statsRT3BodyFatPercent - currentClient.statsRT1BodyFatPercent;

    return bodyFatPercentChange;
  },

  //Calculate the change in clients pounds of body fat from retest 1 and 3
  changeInPounds: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var changeInPounds = currentClient.statsRT3BodyFatLbs - currentClient.statsRT1BodyFatLbs;

    return changeInPounds;
  },

  //Calculate clients change in lean mass from retest 1 and 3
  leanMass: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var leanMass = currentClient.statsRT3LeanMass - currentClient.statsRT1LeanMass;

    return leanMass;
  },

  //Calculate clients body fat lost from retest 1 and 3
  fatLost: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var fatLost = currentClient.statsRT3BodyFatLost - currentClient.statsRT1BodyFatLost;

    return fatLost;
  },

  //Calculate clients muscle gain from retest 1 and 3
  muscleGained: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var muscleGained = currentClient.statsRT3LeanMuscleGain - currentClient.statsRT1LeanMuscleGain;

    return muscleGained;
  },

  neckMeasureChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var neckMeasureChange = currentClient.measureRT3Neck - currentClient.measureRT1Neck;

    return neckMeasureChange;
  },

  chestMeasureChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var chestMeasureChange = currentClient.measureRT3Chest - currentClient.measureRT1Chest;

    return chestMeasureChange;
  },

  shoulderMeasureChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var shoulderMeasureChange = currentClient.measureRT3Shoulders - currentClient.measureRT1Shoulders;

    return shoulderMeasureChange;
  },

  waistMeasureChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var waistMeasureChange = currentClient.measureRT3Waist - currentClient.measureRT1Waist;

    return waistMeasureChange;
  },

  hipsMeasureChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var hipsMeasureChange = currentClient.measureRT3Hips - currentClient.measureRT1Hips;

    return hipsMeasureChange;
  },

  thighMeasureChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var thighMeasureChange = currentClient.measureRT3Thigh - currentClient.measureRT1Thigh;

    return thighMeasureChange;
  },

  calfMeasureChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var calfMeasureChange = currentClient.measureRT3Calf - currentClient.measureRT1Calf;

    return calfMeasureChange;
  },

  bicepMeasureChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var bicepMeasureChange = currentClient.measureRT3Bicep - currentClient.measureRT1Bicep;

    return bicepMeasureChange;
  },

  forearmMeasureChange: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClient = ClientStats.findOne({
      whosStats: clientId
    });

    var forearmMeasureChange = currentClient.measureRT3Forearm - currentClient.measureRT1Forearm;

    return forearmMeasureChange;
  }
});
