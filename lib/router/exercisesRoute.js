//Exercise route
Router.route('/exercises', {
  name: 'exercises',
  template: 'exercises',
  data: function() {

  },

  //Make sure user is logged in and is a trainer
  onBeforeAction: function() {
    var currentUser = Meteor.userId();

    if(Roles.userIsInRole(Meteor.userId(), 'trainer') && currentUser) {
      this.next();
    }

    else {
      this.render('login');
    }
  }
});
