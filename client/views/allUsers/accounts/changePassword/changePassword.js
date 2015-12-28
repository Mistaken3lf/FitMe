Template.changePassword.events({
  //Capture password change event
  'submit form' (event) {
    //Prevent default form submission
    event.preventDefault();

    //Capture the new and old passwords
    let currentPassword = $('[name=currentPassword]').val();
    let newPassword = $('[name=newPassword]').val();
    let newPasswordConfirmation = $('[name=newPasswordConfirmation]').val();

    if (newPassword != newPasswordConfirmation) {
      Bert.alert("Passwords do not match", 'danger', 'growl-top-right');
      return false;
    }

    Accounts.changePassword(currentPassword, newPassword, (error) => {
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
