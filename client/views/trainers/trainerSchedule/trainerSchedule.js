Template.trainerSchedule.onCreated(function () {
  //Subscribe to the clients profile based on the url param
  this.autorun(() => {
    this.subscribe("trainerSchedule");
  });
});

Template.trainerSchedule.events({
  //Events to remove an item from the schedule for monday through sunday
  //on desktop and mobile
  "click .removeFromMonday"() {
    Meteor.call("resetMondaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromMondayMobile"() {
    Meteor.call("resetMondaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromTuesday"() {
    Meteor.call("resetTuesdaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromTuesdayMobile"() {
    Meteor.call("resetTuesdaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromWednesday"() {
    Meteor.call("resetWednesdaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromWednesdayMobile"() {
    Meteor.call("resetWednesdaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromThursday"() {
    Meteor.call("resetThursdaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromThursdayMobile"() {
    Meteor.call("resetThursdaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromFriday"() {
    Meteor.call("resetFridaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromFridayMobile"() {
    Meteor.call("resetFridaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromSaturday"() {
    Meteor.call("resetSaturdaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromSaturdayMobile"() {
    Meteor.call("resetSaturdaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromSunday"() {
    Meteor.call("resetSundaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  },

  "click .removeFromSundayMobile"() {
    Meteor.call("resetSundaysSchedule", this._id, (error) => {
      if (error) {
        Bert.alert("Sorry, your account has been suspended", 'danger', 'growl-top-right');
      }
    });
  }
});

Template.trainerSchedule.helpers({
  //Get the start day of the week
  startOfWeek() {
    let startDay = moment().startOf("week").format("ddd. MMM Do");
    return startDay;
  },
  
  //Get the end day of the week
  endOfWeek() {
    let endDay = moment().endOf("week").format("ddd. MMM Do");
    return endDay;
  },

  //Get trainers schedule for monday
  thisMondaysSchedule() {
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
  thisTuesdaysSchedule() {
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
  thisWednesdaysSchedule() {
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
  thisThursdaysSchedule() {
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
  thisFridaysSchedule() {
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
  thisSaturdaysSchedule() {
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
  thisSundaysSchedule() {
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