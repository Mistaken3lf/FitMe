ContactUsSchema = {};

ContactUsSchema.contact = new SimpleSchema({
  firstName: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },

  lastName: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },

  phoneNumber: {
    type: String,
    regEx: /^[2-9]\d{2}-\d{3}-\d{4}$/,
  },

  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },

  message: {
    type: String,
  }
});
