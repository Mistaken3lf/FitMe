import React from 'react';
import { mount } from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';
import CommandCenter from '../containers/commandCenter.js';
import AddTrainerAdmin from '../components/CommandCenter/AddTrainerAdmin.js';
import AdminHome from '../components/AdminHome/AdminHome.js';
import AdminDashboard from '../containers/adminDashboard.js';
import Layout from '../../common/components/Layout/Layout.js';

//GROUP ADMIN ROUTES
const adminRoutes = FlowRouter.group({
  name: 'admin',
});

//COMMAND CENTER ROUTE
adminRoutes.route('/commandCenter', {
  action() {
    mount(Layout, {
      content: <CommandCenter />
    });
  },
});

//ADD NEW TRAINER ROUTE
adminRoutes.route('/addTrainerAdmin', {
  action() {
    mount(Layout, {
      content: <AddTrainerAdmin />
    });
  },
});

//ADMIN DASHBOARD ROUTE
adminRoutes.route('/adminDashboard/:_id', {
  action() {
    mount(Layout, {
      content: <AdminDashboard />
    });
  },
});

//ADMIN HOME ROUTE
adminRoutes.route('/adminHome', {
  action() {
    mount(Layout, {
      content: <AdminHome />
    });
  },
});
