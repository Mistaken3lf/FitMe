import React from 'react';
import { mount } from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ClientHome from '../components/ClientHome/ClientHome.js';
import Layout from '../../common/components/Layout/Layout.js';
import MyDashboard from '../containers/myDashboard.js';

// MY DASHBOARD ROUTE
FlowRouter.route('/myDashboard', {
  action() {
    mount(Layout, {
      content: <MyDashboard />
    });
  },
});

// CLIENT HOME ROUTE
FlowRouter.route('/clientHome', {
  action() {
    mount(Layout, {
      content: <ClientHome />
    });
  },
});