import { Mongo } from 'meteor/mongo';

export const ClientStats = new Mongo.Collection('clientStats');

ClientStats.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  },
});
