Schema = {};

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

   birthday: {
     type: String,
     optional: true
   },

   address: {
     type: String,
     regEx: /^[a-z0-9A-Z ]{3,40}$/,
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
     regEx: SimpleSchema.RegEx.ZipCode,
     optional: true
   },

   homePhone: {
     type: String,
     regEx: /^[2-9]\d{2}-\d{3}-\d{4}$/,
     optional: true
   },

   cellPhone: {
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
     regEx: /^[a-z0-9A-Z ]$/,
     optional: true
   },

   fitnessGoals: {
     type: String,
     regEx: /^[a-z0-9A-Z ]$/,
     optional: true
   },
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

    profile: {
        type: Schema.UserProfile,
        optional: true
    },

    services: {
        type: Schema.Services,
        blackbox: true,
        optional: true,
    },

    roles: {
       type: [String],
       optional: true
   }
});

Meteor.users.attachSchema(Schema.User);