Meteor.users.schema = new SimpleSchema({
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },

  emails: {
    type: [Object],
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: false
  },

  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },

  firstName: {
    type: String,
    optional: true
  },

  lastName: {
    type: String,
    optional: true
  },

  birthday: {
    type: String,
    optional: true
  },

  address: {
    type: String,
    regEx: /^[a-z0-9A-Z_. ]{3,40}$/,
    optional: true
  },

  city: {
    type: String,
    optional: true
  },

  state: {
    type: String,
    optional: true
  },

  zip: {
    type: String,
    regEx: /^[0-9]{5}$/,
    optional: true
  },

  homePhone: {
    type: String,
    regEx: /^[2-9]\d{2}-\d{3}-\d{4}$/,
    optional: true
  },

  workPhone: {
    type: String,
    regEx: /^[2-9]\d{2}-\d{3}-\d{4}$/,
    optional: true
  },

  emergencyContact: {
    type: String,
    regEx: /^[2-9]\d{2}-\d{3}-\d{4}$/,
    optional: true
  },

  bio: {
    type: String,
    optional: true
  },

  fitnessGoals: {
    type: String,
    optional: true
  },

  mondaysScheduleStart: {
    type: String,
    optional: true
  },

  tuesdaysScheduleStart: {
    type: String,
    optional: true
  },

  wednesdaysScheduleStart: {
    type: String,
    optional: true
  },

  thursdaysScheduleStart: {
    type: String,
    optional: true
  },

  fridaysScheduleStart: {
    type: String,
    optional: true
  },

  saturdaysScheduleStart: {
    type: String,
    optional: true
  },

  sundaysScheduleStart: {
    type: String,
    optional: true
  },

  mondaysScheduleEnd: {
    type: String,
    optional: true
  },

  tuesdaysScheduleEnd: {
    type: String,
    optional: true
  },

  wednesdaysScheduleEnd: {
    type: String,
    optional: true
  },

  thursdaysScheduleEnd: {
    type: String,
    optional: true
  },

  fridaysScheduleEnd: {
    type: String,
    optional: true
  },

  saturdaysScheduleEnd: {
    type: String,
    optional: true
  },

  sundaysScheduleEnd: {
    type: String,
    optional: true
  },

  mondayDescription: {
    type: String,
    optional: true
  },

  tuesdayDescription: {
    type: String,
    optional: true
  },

  wednesdayDescription: {
    type: String,
    optional: true
  },

  thursdayDescription: {
    type: String,
    optional: true
  },

  fridayDescription: {
    type: String,
    optional: true
  },

  saturdayDescription: {
    type: String,
    optional: true
  },

  sundayDescription: {
    type: String,
    optional: true
  },

  mondayStatus: {
    type: Boolean,
    optional: true
  },

  tuesdayStatus: {
    type: Boolean,
    optional: true
  },

  wednesdayStatus: {
    type: Boolean,
    optional: true
  },

  thursdayStatus: {
    type: Boolean,
    optional: true
  },

  fridayStatus: {
    type: Boolean,
    optional: true
  },

  saturdayStatus: {
    type: Boolean,
    optional: true
  },

  sundayStatus: {
    type: Boolean,
    optional: true
  },

  userStatus: {
    type: String,
    optional: true,
  },

  previouslySuspended: {
    type: Boolean,
    optional: true
  },

  createdBy: {
    type: String,
    optional: true
  },

  whosProfile: {
    type: String,
    optional: true,
  },

  sessionsRemaining: {
    type: Number,
    optional: true,
  },

  paymentDue: {
    type: String,
    optional: true,
  },

  planType: {
    type: String,
    optional: true,
  },

  datePurchased: {
    type: String,
    optional: true,
  },

  expiresOn: {
    type: String,
    optional: true,
  },

  myTrainersExpiration: {
    type: String,
    optional: true
  },

  clientLimit: {
    type: Number,
    optional: true,
  },

  status: {
    type: Object,
    optional: true,
    blackbox: true
  },

  hasPaid: {
    type: Boolean,
    optional: true
  },

  services: {
    type: Object,
    blackbox: true,
    optional: true,
  },

  roles: {
    type: [String],
    optional: true,
    blackbox: true
  }
});

Meteor.users.attachSchema(Meteor.users.schema);

//Dont allow any client side inserts, updates, or removes
Meteor.users.deny({
  insert() {
      return true
    },
    update() {
      return true
    },
    remove() {
      return true
    },
});

//Create index to search based on the current clients publication
//and dont select the currently logged in user
TrainersClientsIndex = new EasySearch.Index({
  collection: Meteor.users,
  fields: ['username', 'firstName', 'lastName', 'userStatus'],
  engine: new EasySearch.Minimongo({
    selector: function (searchObject, options, aggregation) {
      var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

      var userId = options.search.userId;
      selector._id = {
        $ne: userId,
      };

      selector.roles = {
        $ne: "trainer",
      };

      return selector;
    }
  })
});

//Create search index to search all active trainers
ActiveTrainersIndex = new EasySearch.Index({
  collection: Meteor.users,
  fields: ['username', 'firstName', 'lastName', 'planType'],
  engine: new EasySearch.Minimongo({
    selector: function (searchObject, options, aggregation) {
      var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

      var userId = options.search.userId;
      selector._id = {
        $ne: userId,
      };

      selector.roles = {
        $ne: "client",
      };

      selector.userStatus = "active";
      return selector;
    }
  })
});

//Create search index to search all suspended trainers
SuspendedTrainersIndex = new EasySearch.Index({
  collection: Meteor.users,
  fields: ['username', 'firstName', 'lastName', 'planType'],
  engine: new EasySearch.Minimongo({
    selector: function (searchObject, options, aggregation) {
      var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

      var userId = options.search.userId;
      selector._id = {
        $ne: userId,
      };

      selector.roles = {
        $ne: "client",
      };

      selector.userStatus = "suspended";
      return selector;
    }
  })
});

//Create search index to search all deleted trainers
DeletedTrainersIndex = new EasySearch.Index({
  collection: Meteor.users,
  fields: ['username', 'firstName', 'lastName', 'planType'],
  engine: new EasySearch.Minimongo({
    selector: function (searchObject, options, aggregation) {
      var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

      var userId = options.search.userId;
      selector._id = {
        $ne: userId,
      };

      selector.roles = {
        $ne: "client",
      };

      selector.userStatus = "deleted";
      return selector;
    }
  })
});