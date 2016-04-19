import React from 'react';
import { mount } from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ClientHome from '../components/ClientHome/ClientHome.js';
import Layout from '../../common/components/Layout/Layout.js';
import MyDashboard from '../containers/myDashboard.js';

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