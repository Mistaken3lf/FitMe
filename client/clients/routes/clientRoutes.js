import React from 'react';
import { mount } from 'react-mounter';
import ClientHome from '../components/ClientHome/ClientHome.js';

//CLIENT ROUTES
const clientRoutes = FlowRouter.group({
  name: 'client',
});

//MY DASHBOARD ROUTE
clientRoutes.route('/myDashboard', {
  action() {
    mount(Layout, {
      content: <MyDashboard />
    });
  },
});

//CLIENT HOME ROUTE
clientRoutes.route('/clientHome', {
  action() {
    mount(Layout, {
      content: <ClientHome />
    });
  },
});