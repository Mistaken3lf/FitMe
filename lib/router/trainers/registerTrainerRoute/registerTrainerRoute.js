//Register route to take user to register template
FlowRouter.route('/register', {
  action: function() {
    BlazeLayout.render('layout', {main: "register"});
  }
});
