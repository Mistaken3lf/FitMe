Router.route('/workouts', {
  name: 'workouts',
  template: 'workouts',
  data: function() {
    console.log("Workouts route");
  },

  onBeforeAction: function() {
    var currentUser = Meteor.userId();

    if(currentUser) {
      this.next();
    }

    else {
      this.render('login');
    }
  }
});
