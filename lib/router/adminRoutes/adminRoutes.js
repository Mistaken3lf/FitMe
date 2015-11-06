//GROUP ADMIN ROUTES
var adminRoutes = FlowRouter.group({
  name: 'admin',
});

//COMMAND CENTER ROUTE
adminRoutes.route('/commandCenter', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "commandCenter"
    });
  },
});

//ADD NEW TRAINER ROUTE
adminRoutes.route('/addTrainerAdmin', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "addTrainerAdmin"
    });
  },
});

//ADMIN DASHBOARD ROUTE
adminRoutes.route('/adminDashboard/:_id', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "adminDashboard"
    });
  },
});
