ClientWorkout = new Mongo.Collection("clientWorkout");

//Dont allow any client side inserts, updates, or deletes
ClientWorkout.deny({
  insert() {
      return true
    },
    update() {
      return true
    },
    remove() {
      return true
    },
});