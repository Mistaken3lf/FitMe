//Route for the client template
Router.route('/clients', {
  name: 'clients',
  template: 'clients',

  data: function() {

  },

  //Wait for subscription to currentClients to be ready
  waitOn: function() {
    return Meteor.subscribe('currentClients');
  },

  //Make sure the user is a Trainer and is logged in
  //before routing to this tepmlate
  onBeforeAction: function() {
    var currentUser = Meteor.userId();

    //Check users role
    if(Roles.userIsInRole(Meteor.userId(), 'trainer') && currentUser) {
      this.next();
    }

    //User is not a trainer so redirect them to the login page
    else {
      this.render('login');
    }
  }
});
