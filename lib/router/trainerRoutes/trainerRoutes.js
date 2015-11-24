//TRAINER ROUTES
var trainerRoutes = FlowRouter.group({
  name: 'trainer',
});

//ADD NEW CLIENT ROUTE
trainerRoutes.route('/addClient', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "addClient"
    });
  },
});

//CLIENT DASHBOARD ROUTE
trainerRoutes.route('/clientDashboard/:_id', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "clientDashboard"
    });
  },
});

//CURRENT CLIENTS ROUTE
trainerRoutes.route('/currentClients', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "currentClients"
    });
  },
});

//CURRENT CLIENTS ROUTE
trainerRoutes.route('/trainerSchedule', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "trainerSchedule"
    });
  },
});
