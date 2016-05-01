import React from 'react';
import { mount } from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';
import TrainerHome from '../components/TrainerHome/TrainerHome.js';
import Layout from '../../common/components/Layout/Layout.js';

// ADD NEW CLIENT ROUTE
FlowRouter.route('/addClient', {
  action() {
    mount(Layout, {
      content: <AddClient />
    });
  },
});

// CLIENT DASHBOARD ROUTE
FlowRouter.route('/clientDashboard/:_id', {
  action() {
    mount(Layout, {
      content: <ClientsDashboard />
    });
  },
});

// CURRENT CLIENTS ROUTE
FlowRouter.route('/currentClients', {
  action() {
    mount(Layout, {
      content: <CurrentClients />
    });
  },
});

// TRAINER SCHEDULE ROUTE
FlowRouter.route('/trainerSchedule', {
  action() {
    mount(Layout, {
      content: <TrainersSchedule />
    });
  },
});

// MY ACCOUNT ROUTE
FlowRouter.route('/myAccount', {
  action() {
    mount(Layout, {
      content: <MyAccount />
    });
  },
});

// TRAINER GUIDE ROUTE
FlowRouter.route('/trainerGuide', {
  action() {
    mount(Layout, {
      content: <TrainerGuide />
    });
  },
});

// TRAINER HOME ROUTE
FlowRouter.route('/trainerHome', {
  action() {
    mount(Layout, {
      content: <TrainerHome />
    });
  },
});
