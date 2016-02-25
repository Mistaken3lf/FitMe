ClientStats = new Mongo.Collection("clientStats");

//Dont allow any client side inserts, updates, or removes
ClientStats.deny({
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