//Route for the clientDashboard template
Router.route('/clientDashboard/:_id', {
  name: 'clientDashboard',
  template: 'clientDashboard',

  data: function() {
    var selectedClient = this.params._id;
    return Meteor.users.findOne({ _id: selectedClient });
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
