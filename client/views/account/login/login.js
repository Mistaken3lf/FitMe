Template.login.events({
  //Capture login form submission
  'submit form': function(event){
    //Prevent default form submission
    event.preventDefault();

    //Capture username and password from form
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();

    //Log user in with userrname and password
    Meteor.loginWithPassword(username, password, function(error){

      //Invalid login
      if(error) {
        //Pop up a toast to show login errors
        Materialize.toast(error.reason, 4000, "centerToast")
      }

      //Login successful!!!
      else {
        //Go home since user is logged in now
        Router.go('/');
      }
    });
  }
});
