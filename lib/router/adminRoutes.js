//GROUP ADMIN ROUTES
let adminRoutes = FlowRouter.group({
  name: 'admin',
});

//COMMAND CENTER ROUTE
adminRoutes.route('/commandCenter', {
  action() {
    BlazeLayout.render('layout', {
      main: "commandCenter"
    });
  },
});

//ADD NEW TRAINER ROUTE
adminRoutes.route('/addTrainerAdmin', {
  action() {
    BlazeLayout.render('layout', {
      main: "addTrainerAdmin"
    });
  },
});

//ADMIN DASHBOARD ROUTE
adminRoutes.route('/adminDashboard/:_id', {
  action() {
    BlazeLayout.render('layout', {
      main: "adminDashboard"
    });
  },
});
