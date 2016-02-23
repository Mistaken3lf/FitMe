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

  TrainersSchedule() {
    return TrainersSchedule;
  }
});