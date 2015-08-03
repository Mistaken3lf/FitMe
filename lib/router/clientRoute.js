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

    if(Roles.userIsInRole(Meteor.userId(), 'trainer') && currentUser) {
      this.next();
    }

    else {
      this.render('login');
    }
  }
});
