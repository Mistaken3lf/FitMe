import Alert from 'react-s-alert';

Accounts.onLogin(() => {
  Meteor.call("setLoginStatus");

  //Go to the admin home if they are an admin
  if (Roles.userIsInRole(Meteor.userId(), "admin")) {
    Alert.success("Welcome to FitMe", {
      position: 'top-right',
      effect: 'jelly'
    });
    FlowRouter.go("/adminHome");
  }

  //Go to the trainer home if they are a trainer
  if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
    Alert.success("Welcome to FitMe", {
      position: 'top-right',
      effect: 'jelly'
    });
    FlowRouter.go("/trainerHome");
  }

  //Go to the client home if they are a client
  if (Roles.userIsInRole(Meteor.userId(), "client")) {
    Alert.success("Welcome to FitMe", {
      position: 'top-right',
      effect: 'jelly'
    });
    FlowRouter.go("/clientHome");
  }
});