//CLIENT ROUTES
let clientRoutes = FlowRouter.group({
  name: 'client',
});

//MY DASHBOARD ROUTE
clientRoutes.route('/myDashboard', {
  action() {
    BlazeLayout.render('layout', {
      main: "myDashboard"
    });
  },
});