import React from 'react';
import { mount } from 'react-mounter';
import TrainerHome from '../components/TrainerHome/TrainerHome.js';

//TRAINER ROUTES
const trainerRoutes = FlowRouter.group({
  name: 'trainer',
});

//ADD NEW CLIENT ROUTE
trainerRoutes.route('/addClient', {
  action() {
    mount(Layout, {
      content: <AddClient />
    });
  },
});

//CLIENT DASHBOARD ROUTE
trainerRoutes.route('/clientDashboard/:_id', {
  action() {
    mount(Layout, {
      content: <ClientsDashboard />
    });
  },
});

//CURRENT CLIENTS ROUTE
trainerRoutes.route('/currentClients', {
  action() {
    mount(Layout, {
      content: <CurrentClients />
    });
  },
});

//TRAINER SCHEDULE ROUTE
trainerRoutes.route('/trainerSchedule', {
  action() {
    mount(Layout, {
      content: <TrainersSchedule />
    });
  },
});

//MY ACCOUNT ROUTE
trainerRoutes.route('/myAccount', {
  action() {
    mount(Layout, {
      content: <MyAccount />
    });
  },
});

//TRAINER GUIDE ROUTE
trainerRoutes.route('/trainerGuide', {
  action() {
    mount(Layout, {
      content: <TrainerGuide />
    });
  },
});

//TRAINER HOME ROUTE
trainerRoutes.route('/trainerHome', {
  action() {
    mount(Layout, {
      content: <TrainerHome />
    });
  },
});
