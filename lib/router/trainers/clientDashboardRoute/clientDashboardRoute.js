//Route for the clientDashboard template
FlowRouter.route('/clientDashboard/:_id', {
  action: function() {
    BlazeLayout.render('layout', {main: "clientDashboard"});
  },
});
