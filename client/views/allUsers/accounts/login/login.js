Template.login.events({
  //Capture login form submission
  'submit form' (event) {
    //Prevent default form submission
    event.preventDefault();

    //Capture username and password from form
    let username = $('[name=username]').val();
    let password = $('[name=password]').val();

    //Log user in with userrname and password
    Meteor.loginWithPassword(username, password, (error) => {
      //Invalid login
      if (error) {
        //Pop up an alert to show login failed
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } 
    });
    
    Accounts.onLogin(() => {
      //Go to the admin home if they are an admin
      if(Roles.userIsInRole(Meteor.userId(), "admin")) {
        FlowRouter.go("/adminHome");
      }
      
      //Go to the trainer home if they are a trainer
      if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
        FlowRouter.go("/trainerHome");
      }
      
      //Go to the client home if they are a client
      if(Roles.userIsInRole(Meteor.userId(), "client")) {
        FlowRouter.go("/clientHome");
      }
    });
  }
});
