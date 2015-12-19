//TRAINER ROUTES
let trainerRoutes = FlowRouter.group({
  name: 'trainer',
});

//ADD NEW CLIENT ROUTE
trainerRoutes.route('/addClient', {
  action() {
    BlazeLayout.render('layout', {
      main: "addClient"
    });
  },
});

//CLIENT DASHBOARD ROUTE
trainerRoutes.route('/clientDashboard/:_id', {
  action() {
    BlazeLayout.render('layout', {
      main: "clientDashboard"
    });
  },
});

//CURRENT CLIENTS ROUTE
trainerRoutes.route('/currentClients', {
  action() {
    BlazeLayout.render('layout', {
      main: "currentClients"
    });
  },
});

//TRAINER SCHEDULE ROUTE
trainerRoutes.route('/trainerSchedule', {
  action() {
    BlazeLayout.render('layout', {
      main: "trainerSchedule"
    });
  },
});

//MY ACCOUNT ROUTE
trainerRoutes.route('/myAccount', {
  action() {
    BlazeLayout.render('layout', {
      main: "myAccount"
    });
  },
});
