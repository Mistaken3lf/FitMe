//CLIENT ROUTES
const clientRoutes = FlowRouter.group({
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

//CLIENT HOME ROUTE
clientRoutes.route('/clientHome', {
  action() {
    BlazeLayout.render('layout', {
      main: "clientHome"
    });
  },
});