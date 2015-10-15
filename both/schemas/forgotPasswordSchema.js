ForgotPasswordSchema = {};

ForgotPasswordSchema.forgot = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
});
