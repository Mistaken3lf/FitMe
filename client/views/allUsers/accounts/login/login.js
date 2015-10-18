Template.login.events({
  //Capture login form submission
  'submit form': function(event) {
    //Prevent default form submission
    event.preventDefault();

    //Capture username and password from form
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();

    //Log user in with userrname and password
    Meteor.loginWithPassword(username, password, function(error) {

      //Invalid login
      if (error) {
        //Pop up an alert to show login failed
        Bert.alert(error.reason, 'danger', 'growl-top-right' );
      } else {
        //Go home since user is logged in now
        FlowRouter.go('/');
      }
    });
  }
});
