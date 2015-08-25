//Root route that takes the user to the
//home template
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', {main: "home"});
  }
});
