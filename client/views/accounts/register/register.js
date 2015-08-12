AutoForm.hooks({
  registerForm: {
    onSubmit: function (doc) {
      this.event.preventDefault();

      //Call server method to register the trainer
      Meteor.call("registerTrainer", doc.profile.firstName, doc.profile.lastName, doc.username, doc.services.$.password, doc.email, function(error) {

        //Error registering trainer
        if(error) {
          //Pop up a toast to show the error
          Materialize.toast(error.reason, 4000, "centerToast")
        } else {
          //Login user with provided credentials
          Meteor.loginWithPassword(doc.username, doc.services.$.password, function(error){
            //Failed to login
            if(error) {
              //Pop up a toast to show reason for failed login
              Materialize.toast(error.reason, 4000, "centerToast")
            } else {
              //Route the newly logged in user home
              Router.go('/');
            }
          });
        }
      });
    }
  }
});
