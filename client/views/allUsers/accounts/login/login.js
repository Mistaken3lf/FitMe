Template.login.events({
  //Capture login form submission
  'submit form': function (event) {
    //Prevent default form submission
    event.preventDefault();

    //Capture username and password from form
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();

    //Log user in with userrname and password
    Meteor.loginWithPassword(username, password, function (error) {
      //Invalid login
      if (error) {
        //Pop up an alert to show login failed
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } 
    });
    
    Accounts.onLogin(function() {
      if(Roles.userIsInRole(Meteor.userId(), "admin")) {
        FlowRouter.go("/adminHome");
      }
      
      if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
        FlowRouter.go("/trainerHome");
      }
      
      if(Roles.userIsInRole(Meteor.userId(), "client")) {
        FlowRouter.go("/clientHome");
      }
    });
  }
});
