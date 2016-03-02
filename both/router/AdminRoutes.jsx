//GROUP ADMIN ROUTES
const adminRoutes = FlowRouter.group({
  name: 'admin',
});

//COMMAND CENTER ROUTE
adminRoutes.route('/commandCenter', {
  action() {
    ReactLayout.render(Layout, {
      content: <CommandCenter />
    });
  },
});

//ADD NEW TRAINER ROUTE
adminRoutes.route('/addTrainerAdmin', {
  action() {
    ReactLayout.render(Layout, {
      content: <AddTrainerAdmin />
    });
  },
});

//ADMIN DASHBOARD ROUTE
adminRoutes.route('/adminDashboard/:_id', {
  action() {
    ReactLayout.render(Layout, {
      content: <AdminDashboard />
    });
  },
});

//ADMIN HOME ROUTE
adminRoutes.route('/adminHome', {
  action() {
    ReactLayout.render(Layout, {
      content: <AdminHome />
    });
  },
});
