//Route for the clientDashboard template
Router.route('/clientDashboard/:_id', {
  name: 'clientDashboard',
  template: 'clientDashboard',

  data: function() {
    var selectedClient = this.params._id;
    return {
      currentClient: Meteor.users.findOne({ _id: selectedClient }),
      currentClientsStats: ClientStats.findOne({whosStats: selectedClient}),
      currentClientsWorkout: ClientWorkout.findOne({whosWorkout: selectedClient}),
      currentClientsCardio: ClientCardio.findOne({whosCardio: selectedClient}),
    }
  },

  //Wait for subscription to currentClients to be ready
  waitOn: function() {
    return [
      Meteor.subscribe('myClientsProfiles'),
      Meteor.subscribe("currentClientsStats", this.params._id),
      Meteor.subscribe("currentClientsWorkout", this.params._id),
      Meteor.subscribe("currentClientsCardio", this.params._id),
    ]
  },

  fastRender: true,

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
