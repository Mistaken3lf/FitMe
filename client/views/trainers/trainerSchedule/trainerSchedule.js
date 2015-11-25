Template.trainerSchedule.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    self.subscribe("trainerSchedule");
  });
});

Template.trainerSchedule.helpers({
  //Get trainers schedule for monday
  thisMondaysSchedule: function () {
    return Meteor.users.find({
      mondaysSchedule: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        mondaysSchedule: 1,
        firstName: 1,
        lastName: 1
      },
      sort: {
        mondaysSchedule: 1
      }

    });
  },

  //Get trainers schedule for tuesday
  thisTuesdaysSchedule: function () {
    return Meteor.users.find({
      tuesdaysSchedule: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        tuesdaysSchedule: 1,
        firstName: 1,
        lastName: 1
      },
      sort: {
        tuesdaysSchedule: 1
      }
    });
  },

  //Get trainers schedule for wednesday
  thisWednesdaysSchedule: function () {
    return Meteor.users.find({
      wednesdaysSchedule: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        wednesdaysSchedule: 1,
        firstName: 1,
        lastName: 1
      },
      sort: {
        wednesdaysSchedule: 1
      }
    });
  },

  //Get trainers schedule for thursday
  thisThursdaysSchedule: function () {
    return Meteor.users.find({
      thursdaysSchedule: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        thursdaysSchedule: 1,
        firstName: 1,
        lastName: 1
      },
      sort: {
        thursdaysSchedule: 1
      }
    });
  },

  //Get trainers schedule for friday
  thisFridaysSchedule: function () {
    return Meteor.users.find({
      fridaysSchedule: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        fridaysSchedule: 1,
        firstName: 1,
        lastName: 1
      },
      sort: {
        fridaysSchedule: 1
      }
    });
  },

  //Get trainers schedule for saturday
  thisSaturdaysSchedule: function () {
    return Meteor.users.find({
      saturdaysSchedule: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        saturdaysSchedule: 1,
        firstName: 1,
        lastName: 1
      },
      sort: {
        saturdaysSchedule: 1
      }
    });
  },

  //Get trainers schedule for sunday
  thisSundaysSchedule: function () {
    return Meteor.users.find({
      sundaysSchedule: {
        $exists: true
      }
    }, {
      fields: {
        username: 1,
        sundaysSchedule: 1,
        firstName: 1,
        lastName: 1
      },
      sort: {
        sundaysSchedule: 1
      }
    });
  },

  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  }
});