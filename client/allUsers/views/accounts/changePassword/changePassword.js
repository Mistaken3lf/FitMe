Template.changePassword.events({
  //Capture password change event
  'submit form': function(event){
    //Prevent default form submission
    event.preventDefault();

    //Capture the new and old passwords
    var currentPassword = $('[name=currentPassword]').val();
    var newPassword = $('[name=newPassword]').val();
    var newPasswordConfirmation = $('[name=newPasswordConfirmation]').val();

    if(newPassword != newPasswordConfirmation) {
      Materialize.toast("Passwords dont match", 4000, "centerToast");;
      return false;
    }

    Accounts.changePassword(currentPassword, newPassword, function(error) {
      //Invalid login
      if(error) {
        //Pop up a toast to show login errors
        Materialize.toast(error.reason, 4000, "centerToast")
      } else {
        //Go home since user is logged in now
        FlowRouter.go('/');
      }
    });

  }
});
