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
});
