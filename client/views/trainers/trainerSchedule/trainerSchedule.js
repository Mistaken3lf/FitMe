Template.trainerSchedule.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    self.subscribe("trainerSchedule");
  });
});

Template.trainerSchedule.events({
  "click .removeFromMonday": function () {
    Meteor.call("resetMondaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromMondayMobile": function () {
    Meteor.call("resetMondaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromTuesday": function () {
    Meteor.call("resetTuesdaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromTuesdayMobile": function () {
    Meteor.call("resetTuesdaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromWednesday": function () {
    Meteor.call("resetWednesdaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromWednesdayMobile": function () {
    Meteor.call("resetWednesdaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromThursday": function () {
    Meteor.call("resetThursdaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromThursdayMobile": function () {
    Meteor.call("resetThursdaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromFriday": function () {
    Meteor.call("resetFridaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromFridayMobile": function () {
    Meteor.call("resetFridaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromSaturday": function () {
    Meteor.call("resetSaturdaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromSaturdayMobile": function () {
    Meteor.call("resetSaturdaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromSunday": function () {
    Meteor.call("resetSundaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromSundayMobile": function () {
    Meteor.call("resetSundaysSchedule", this._id, function (error) {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  }
});

Template.trainerSchedule.helpers({
  startOfWeek: function () {
    let startDay = moment().startOf("week").format("ddd. MMM Do");
    return startDay;
  },

  endOfWeek: function () {
    let endDay = moment().endOf("week").format("ddd. MMM Do");
    return endDay;
  },

  //Get trainers schedule for monday
  thisMondaysSchedule: function () {
    return Meteor.users.find({
      mondayStatus: true,
      mondaysScheduleStart: {
        $exists: true
      },

      mondaysScheduleEnd: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        mondaysScheduleStart: 1,
        mondaysScheduleEnd: 1,
        firstName: 1,
        lastName: 1,
        mondayDescription: 1
      },
      sort: {
        mondaysScheduleStart: 1
      }

    });
  },

  //Get trainers schedule for tuesday
  thisTuesdaysSchedule: function () {
    return Meteor.users.find({
      tuesdayStatus: true,
      tuesdaysScheduleStart: {
        $exists: true
      },

      tuesdaysScheduleEnd: {
        $exists: true
      }

    }, {
      fields: {
        username: 1,
        tuesdaysScheduleStart: 1,
        tuesdaysScheduleEnd: 1,
        firstName: 1,
        lastName: 1,
        tuesdayDescription: 1
      },
      sort: {
        tuesdaysScheduleStart: 1
      }
    });
  },

  //Get trainers schedule for wednesday
  thisWednesdaysSchedule: function () {
    return Meteor.users.find({
      wednesdayStatus: true,

      wednesdaysScheduleStart: {
        $exists: true
      },

      wednesdaysScheduleEnd: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        wednesdaysScheduleStart: 1,
        wednesdaysScheduleEnd: 1,
        firstName: 1,
        lastName: 1,
        wednesdayDescription: 1
      },
      sort: {
        wednesdaysScheduleStart: 1
      }
    });
  },

  //Get trainers schedule for thursday
  thisThursdaysSchedule: function () {
    return Meteor.users.find({
      thursdayStatus: true,
      thursdaysScheduleStart: {
        $exists: true
      },

      thursdaysScheduleEnd: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        thursdaysScheduleStart: 1,
        thursdaysScheduleEnd: 1,
        firstName: 1,
        lastName: 1,
        thursdayDescription: 1
      },
      sort: {
        thursdaysScheduleStart: 1
      }
    });
  },

  //Get trainers schedule for friday
  thisFridaysSchedule: function () {
    return Meteor.users.find({
      fridayStatus: true,

      fridaysScheduleStart: {
        $exists: true
      },

      fridaysScheduleEnd: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        fridaysScheduleStart: 1,
        fridaysScheduleEnd: 1,
        firstName: 1,
        lastName: 1,
        fridayDescription: 1
      },
      sort: {
        fridaysScheduleStart: 1
      }
    });
  },

  //Get trainers schedule for saturday
  thisSaturdaysSchedule: function () {
    return Meteor.users.find({
      saturdayStatus: true,

      saturdaysScheduleStart: {
        $exists: true
      },

      saturdaysScheduleEnd: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        saturdaysScheduleStart: 1,
        saturdaysScheduleEnd: 1,
        firstName: 1,
        lastName: 1,
        saturdayDescription: 1
      },
      sort: {
        saturdaysScheduleStart: 1
      }
    });
  },

  //Get trainers schedule for sunday
  thisSundaysSchedule: function () {
    return Meteor.users.find({
      sundayStatus: true,

      sundaysScheduleStart: {
        $exists: true
      },

      sundaysScheduleEnd: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        sundaysScheduleStart: 1,
        sundaysScheduleEnd: 1,
        firstName: 1,
        lastName: 1,
        sundayDescription: 1
      },
      sort: {
        sundaysScheduleStart: 1
      }
    });
  }
});