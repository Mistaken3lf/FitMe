//CLIENT ROUTES
var clientRoutes = FlowRouter.group({
  name: 'client',
});

//MY DASHBOARD ROUTE
clientRoutes.route('/myDashboard', {
  action: function () {
    BlazeLayout.render('layout', {
      clientContent: "myDashboard"
    });
  },
});