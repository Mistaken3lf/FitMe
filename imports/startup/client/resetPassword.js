import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

if (Accounts._resetPasswordToken) {
 Session.set('resetPassword', Accounts._resetPasswordToken);
 FlowRouter.go('reset-password' + Session.get('resetPassword'));
}