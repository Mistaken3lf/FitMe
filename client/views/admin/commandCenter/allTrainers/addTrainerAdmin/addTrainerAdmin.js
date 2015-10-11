////////////////////////////////////////////////////////////////////////////////
Template.addTrainerAdmin.events({
  //Capture create trainer form event
  'submit form': function (event) {
    //Prevent default form submission
    event.preventDefault();

    //Get the first and last name, username, password and email from form
    var firstName = $('[name=firstName]').val();
    var lastName = $('[name=lastName]').val();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();

    //Call server method to create the trainer
    Meteor.call("createTrainer", firstName, lastName, username, password, email, function (error) {

      //Error creating trainer
      if (error) {
        //Pop up a toast to show the error
        Materialize.toast(error.reason, 4000, "centerToast")
      } else {
        //Route back to the command center
        FlowRouter.go('/commandCenter');
      }
    });
  }
});
////////////////////////////////////////////////////////////////////////////////