if (Accounts._resetPasswordToken) {
  FlowRouter.go("/resetPassword");
  Session.set('resetPassword', Accounts._resetPasswordToken);
}

Template.forgotPassword.events({
  //Capture password change event
  'submit form': function(event){
    //Prevent default form submission
    event.preventDefault();

    //Capture the new and old passwords
    var email = $('[name=email]').val();

    Accounts.forgotPassword({email: email}, function(error){
       if(error) {
         Materialize.toast("Email does not exist", 4000, "centerToast");
       }
       else {
         Materialize.toast("Email has been sent", 4000, "centerToast");
         FlowRouter.go("/login");
       }
    });
  }
});

Template.resetPassword.helpers({
  resetPassword: function() {
    return Session.get('resetPassword');
  }
});

Template.resetPassword.events({
  'submit form': function(event) {
    //Prevent default form submission
    event.preventDefault();

    //Capture the new and old passwords
    var newPassword = $('[name=newPassword]').val();
    var newPasswordConfirmation = $('[name=newPasswordConfirmation]').val();

      Accounts.resetPassword(Session.get('resetPassword'), newPassword, function(error) {
        if (error) {
          Materialize.toast(error, 4000, "centerToast");
        } else {
          Materialize.toast("Password has been changed", 4000, "centerToast");
          Session.set('resetPassword', null);
          FlowRouter.go("/");
        }
      });
    return false;
  }
});
