//Route for the add client template
FlowRouter.route('/addClient', {
  action: function() {
    BlazeLayout.render('layout', {main: "addClient"});
  },
});
