import { Mongo } from 'meteor/mongo';

export const Cardio = new Mongo.Collection("clientCardio");

Cardio.deny({
  insert() {
      return true;
    },
    update() {
      return true;
    },
    remove() {
      return true;
    }
});