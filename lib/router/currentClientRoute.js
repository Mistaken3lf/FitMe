//Route for the client template
Router.route('/currentClients', {
  name: 'currentClients',
  template: 'currentClients',

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

    } else {

      this.render('login');
    }
  }
});
