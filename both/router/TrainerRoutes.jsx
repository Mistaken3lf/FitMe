//TRAINER ROUTES
const trainerRoutes = FlowRouter.group({
  name: 'trainer',
});

//ADD NEW CLIENT ROUTE
trainerRoutes.route('/addClient', {
  action() {
    ReactLayout.render(Layout, {
      content: <AddClient />
    });
  },
});

//CLIENT DASHBOARD ROUTE
trainerRoutes.route('/clientDashboard/:_id', {
  action() {
    ReactLayout.render(Layout, {
      content: <ClientsDashboard />
    });
  },
});

//CURRENT CLIENTS ROUTE
trainerRoutes.route('/currentClients', {
  action() {
    ReactLayout.render(Layout, {
      content: <CurrentClients />
    });
  },
});

//TRAINER SCHEDULE ROUTE
trainerRoutes.route('/trainerSchedule', {
  action() {
    ReactLayout.render(Layout, {
      content: <TrainersSchedule />
    });
  },
});

//MY ACCOUNT ROUTE
trainerRoutes.route('/myAccount', {
  action() {
    ReactLayout.render(Layout, {
      content: <MyAccount />
    });
  },
});

//TRAINER GUIDE ROUTE
trainerRoutes.route('/trainerGuide', {
  action() {
    ReactLayout.render(Layout, {
      content: <TrainerGuide />
    });
  },
});

//TRAINER HOME ROUTE
trainerRoutes.route('/trainerHome', {
  action() {
    ReactLayout.render(Layout, {
      content: <TrainerHome />
    });
  },
});
