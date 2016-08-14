import React from 'react';
import { mount } from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ClientHome from '../ui/pages/ClientHome/ClientHome.js';
import Layout from '../ui/layout/MainLayout.js';
import MyDashboard from '../ui/containers/myDashboard.js';

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
