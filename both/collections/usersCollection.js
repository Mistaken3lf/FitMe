var Schema = {};

Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    regEx: /^[a-zA-Z-]{2,25}$/,
    optional: true
  },

  lastName: {
    type: String,
    regEx: /^[a-zA-Z]{2,25}$/,
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
    regEx: /^[a-zA-Z ]{0,150}$/,
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

  mondaysSchedule: {
    type: String,
    optional: true
  },

  tuesdaysSchedule: {
    type: String,
    optional: true
  },

  wednesdaysSchedule: {
    type: String,
    optional: true
  },

  thursdaysSchedule: {
    type: String,
    optional: true
  },

  fridaysSchedule: {
    type: String,
    optional: true
  },

  saturdaysSchedule: {
    type: String,
    optional: true
  },

  sundaysSchedule: {
    type: String,
    optional: true
  }
});

Schema.User = new SimpleSchema({
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

  userProfile: {
    type: Schema.UserProfile,
    optional: true
  },

  clientLimit: {
    type: Number,
    optional: true,
  },

  userStatus: {
    type: String,
    optional: true,
  },

  services: {
    type: Schema.Services,
    blackbox: true,
    optional: true,
  },

  roles: {
    type: [String],
    optional: true,
    blackbox: true
  }
});

Meteor.users.attachSchema(Schema.User);
