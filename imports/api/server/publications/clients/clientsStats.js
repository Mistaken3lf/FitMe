import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { ClientStats } from '../../../collections/clientStats.js';

Meteor.publish('clients.stats', function () {
  if (Roles.userIsInRole(this.userId, 'client')) {
    // Find the logged in clients stats
    return ClientStats.find({
      whosStats: this.userId,
    });
  } else {
    throw new Meteor.Error('not-authorized');
  }
});
