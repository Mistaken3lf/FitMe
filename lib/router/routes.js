//Root route that takes the user to the
//home template
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', {main: "home"});
  }
});

//Login route to take user to login template
FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render('layout', {main: "login"});
  }
});

//Route for the add client template
FlowRouter.route('/addClient', {
  action: function() {
    BlazeLayout.render('layout', {main: "addClient"});
  },
});

//Route for the clientDashboard template
FlowRouter.route('/clientDashboard/:_id', {
  action: function() {
    BlazeLayout.render('layout', {main: "clientDashboard"});
  },
});

//Route for the current clients template
FlowRouter.route('/currentClients', {
  subscriptions: function() {
    this.register("myClients", Meteor.subscribe("currentClients"));
  },

  action: function() {
    BlazeLayout.render('layout', {main: "currentClients"});
  },
});

//Register route to take user to register template
FlowRouter.route('/register', {
  action: function() {
    BlazeLayout.render('layout', {main: "register"});
  }
});
