import { Mongo } from 'meteor/mongo';

export const Workouts = new Mongo.Collection("clientWorkout");

Workouts.deny({
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