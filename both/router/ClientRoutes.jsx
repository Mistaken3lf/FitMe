//CLIENT ROUTES
const clientRoutes = FlowRouter.group({
  name: 'client',
});

//MY DASHBOARD ROUTE
clientRoutes.route('/myDashboard', {
  action() {
    ReactLayout.render(Layout, {
      content: <MyDashboard />
    });
  },
});

//CLIENT HOME ROUTE
clientRoutes.route('/clientHome', {
  action() {
    ReactLayout.render(Layout, {
      content: <ClientHome />
    });
  },
});