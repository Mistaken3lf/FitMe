ClientCardio = new Mongo.Collection("clientCardio");

//Dont allow any client side inserts, updates, or deletes
ClientCardio.deny({
  insert() {
      return true
    },
    update() {
      return true
    },
    remove() {
      return true
    }
});