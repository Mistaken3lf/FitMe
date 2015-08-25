//Login route to take user to login template
FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render('layout', {main: "login"});
  }
});
