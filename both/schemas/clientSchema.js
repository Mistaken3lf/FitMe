Schema = {};

SimpleSchema.debug = true

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

    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        blackbox: true,
        optional: true
    },

    "services.$.password": {
      type: String,
      regEx: /^[a-z0-9A-Z_]{3,15}$/
    },

    roles: {
       type: [String],
       optional: true
   }
});

Meteor.users.attachSchema(Schema.User);
