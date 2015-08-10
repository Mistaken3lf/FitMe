ClientSchema = {};

  //Create validation rules for adding a new client
ClientSchema.client = new SimpleSchema({
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },

  password: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },

  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },

  firstName: {
    type: String,
    regEx: /^[a-zA-Z-]{2,25}$/
   },

   lastName: {
       type: String,
       regEx: /^[a-zA-Z]{2,25}$/
   },

   birthday: {
     type: String
   },

   address: {
     type: String,
     regEx: /^[a-z0-9A-Z ]{3,40}$/
   },

   city: {
     type: String,
     regEx: /^[a-zA-Z_]{3,15}$/
   },

   state: {
     type: String,
   },

   zip: {
     type: String,
     regEx: /^[0-9]{3,5}$/
   },

   homePhone: {
     type: String,
     regEx: /^[0-9-]{3,15}$/
   },

   cellPhone: {
     type: String,
     regEx: /^[0-9-]{3,15}$/
   },

   workPhone: {
     type: String,
     regEx: /^[0-9-]{3,15}$/
   },

   emergencyContact: {
     type: String,
     regEx: /^[0-9-]{3,15}$/
   },

   bio: {
     type: String
   },

   fitnessGoals: {
     type: String
   },
});
