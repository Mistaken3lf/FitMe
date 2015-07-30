Router.route('/clients', {
  name: 'clients',
  template: 'clients',

  data: function() {

  },

  waitOn: function() {
    return Meteor.subscribe('currentClients');
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
