//Check if the password is being resetPassword
if (Accounts._resetPasswordToken) {
  //Go to the reset page if its being reset
  FlowRouter.go("/resetPassword");

  //Set the reset session variable to the url token sent
  Session.set('resetPassword', Accounts._resetPasswordToken);
}

Template.forgotPassword.events({
  //Capture forgot password event
  'submit form': function (event) {
    //Prevent default form submission
    event.preventDefault();

    //Capture the users email
    var email = $('[name=email]').val();

    //Send email to user with link to reset password
    Accounts.forgotPassword({
      email: email
    }, function (error) {
      if (error) {
        Bert.alert("Invalid Email!", 'danger', 'growl-top-right');
      } else {
        Bert.alert("Email has been sent", 'success', 'growl-top-right');
        FlowRouter.go("/login");
      }
    });
  }
});

Template.resetPassword.helpers({
  //Get the resetPassword session variable to check
  //if its been set in the template
  resetPassword: function () {
    return Session.get('resetPassword');
  }
});

Template.resetPassword.events({
  'submit form': function (event) {
    //Prevent default form submission
    event.preventDefault();

    //Capture the new password
    var newPassword = $('[name=newPassword]').val();
    var newPasswordConfirmation = $('[name=newPasswordConfirmation]').val();

    //Make sure the passwords match
    if (newPassword != newPasswordConfirmation) {
      Bert.alert("Passwords do not match", 'danger', 'growl-top-right');
      return false;
    }

    //Reset the users password
    Accounts.resetPassword(Session.get('resetPassword'), newPassword, function (error) {
      if (error) {
        Materialize.toast(error, 4000, "centerToast");
      } else {
        Bert.alert("Password successfully changed", 'success', 'growl-top-right');
        Session.set('resetPassword', null);
        FlowRouter.go("/");
      }
    });
  }
});
