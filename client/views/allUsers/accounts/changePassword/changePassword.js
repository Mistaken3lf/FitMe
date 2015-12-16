Template.changePassword.events({
  //Capture password change event
  'submit form': function (event) {
    //Prevent default form submission
    event.preventDefault();

    //Capture the new and old passwords
    var currentPassword = $('[name=currentPassword]').val();
    var newPassword = $('[name=newPassword]').val();
    var newPasswordConfirmation = $('[name=newPasswordConfirmation]').val();

    if (newPassword != newPasswordConfirmation) {
      Bert.alert("Passwords do not match", 'danger', 'growl-top-right');
      return false;
    }

    Accounts.changePassword(currentPassword, newPassword, function (error) {
      //Invalid passwords
      if (error) {
        //Pop up an alert to show the error
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        //Go home since the user has now changed their password
        FlowRouter.go('/');
      }
    });
  }
});
