AutoForm.hooks({
  loginForm: {
    onSubmit: function (doc) {
      this.event.preventDefault();

      //Log user in with userrname and password
      Meteor.loginWithPassword(doc.username, doc.services.$.password, function(error){

        //Invalid login
        if(error) {
          //Pop up a toast to show login errors
          Materialize.toast(error.reason, 4000, "centerToast")
        } else {
          //Go home since user is logged in now
          Router.go('/');
        }
      });
    }
  }
});
