//Check if the password is being resetPassword
if (Accounts._resetPasswordToken) {
  //Go to the reset page if its being reset
  FlowRouter.go("/resetPassword");

  //Set the reset session variable to the url token sent
  Session.set('resetPassword', Accounts._resetPasswordToken);
}

Template.resetPassword.helpers({
  //Get the resetPassword session variable to check
  //if its been set in the template
  ResetPassword() {
    return ResetPassword;
  }
});