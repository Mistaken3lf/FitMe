//TRAINER ROUTES
const trainerRoutes = FlowRouter.group({
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

//TRAINER GUIDE ROUTE
trainerRoutes.route('/trainerGuide', {
  action() {
    BlazeLayout.render('layout', {
      main: "trainerGuide"
    });
  },
});

//TRAINER HOME ROUTE
trainerRoutes.route('/trainerHome', {
  action() {
    BlazeLayout.render('layout', {
      main: "trainerHome"
    });
  },
});
