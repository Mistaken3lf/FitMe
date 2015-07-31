Router.route('/exercises', {
  name: 'exercises',
  template: 'exercises',
  data: function() {
    
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
