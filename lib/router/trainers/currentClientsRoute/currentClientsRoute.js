//Route for the current clients template
FlowRouter.route('/currentClients', {
  subscriptions: function() {
    this.register("myClients", Meteor.subscribe("currentClients"));
  },

  action: function() {
    BlazeLayout.render('layout', {main: "currentClients"});
  },
});
