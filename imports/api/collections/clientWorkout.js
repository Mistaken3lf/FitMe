import { Mongo } from 'meteor/mongo';

export const ClientWorkout = new Mongo.Collection("clientWorkout");

ClientWorkout.deny({
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