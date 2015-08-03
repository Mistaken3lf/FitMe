Router.route('/exercises', {
  name: 'exercises',
  template: 'exercises',
  data: function() {

  },

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
