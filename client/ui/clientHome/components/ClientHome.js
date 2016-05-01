import React from 'react';
import {Roles} from 'meteor/alanning:roles';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ClientHomeHeader from './ClientHomeHeader.js';
import ClientHomeWelcome from './ClientHomeWelcome.js';
import ClientHomeFooter from './ClientHomeFooter.js';

export default class ClientHome extends React.Component {
  componentDidMount() {
    if (!Roles.userIsInRole(Meteor.userId(), "client") && !Meteor.loggingIn()) {
      FlowRouter.go("/notAuthorized");
      return false;
    }
  }

  render() {
    return (
      <div>
        <ClientHomeHeader />
        <ClientHomeWelcome />
        <ClientHomeFooter />
      </div>
    );
  }
}
