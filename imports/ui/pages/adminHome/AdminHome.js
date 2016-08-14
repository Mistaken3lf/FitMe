import React from 'react';
import { Roles } from 'meteor/alanning:roles';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import AdminHomeHeader from './AdminHomeHeader.js';
import AdminHomeWelcome from './AdminHomeWelcome.js';
import AdminHomeFooter from './AdminHomeFooter.js';

export default class AdminHome extends React.Component {
  componentDidMount() {
    if (!Roles.userIsInRole(Meteor.userId(), 'admin') && !Meteor.loggingIn()) {
      FlowRouter.go('/notAuthorized');
      return false;
    }
  }

  render() {
    return (
      <div>
        <AdminHomeHeader />
        <AdminHomeWelcome />
        <AdminHomeFooter />
      </div>
    );
  }
}
