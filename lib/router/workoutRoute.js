//Workout route that makes sure a user is a trainer
//and is logged in before going to it
Router.route('/workouts', {
  name: 'workouts',
  template: 'workouts',
  data: function() {

  },

  //Check users credentials to make sure they are logged in
  //and are a trainer
  onBeforeAction: function() {
    var currentUser = Meteor.userId();

    if(Roles.userIsInRole(Meteor.userId(), 'trainer') && currentUser) {
      this.next();
    }

    //Take them to the login if their credentials fail
    else {
      this.render('login');
    }
  }
});
