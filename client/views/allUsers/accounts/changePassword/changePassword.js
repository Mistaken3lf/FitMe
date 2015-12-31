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
        //Go to the admin home if they are an admin
        if(Roles.userIsInRole(Meteor.userId(), "admin")) {
          FlowRouter.go("/adminHome");
        }
        
        //Go to the trainers home if they are a trainer
        if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
          FlowRouter.go("/trainerHome");
        }
        
        //Go to the clients home if they are a client
        if(Roles.userIsInRole(Meteor.userId(), "client")) {
          FlowRouter.go("/clientHome");
        }
      }
    });
  }
});
