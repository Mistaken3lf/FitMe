//Route for the add client template
Router.route('/addClient', {
  name: 'addClient',
  template: 'addClient',

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
