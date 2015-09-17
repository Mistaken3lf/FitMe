ResetPasswordSchema = {};

ResetPasswordSchema.reset = new SimpleSchema({
  newPassword: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },

  newPasswordConfirmation: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  }
});
