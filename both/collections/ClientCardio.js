ClientCardio = new Mongo.Collection("clientCardio");

//Dont allow any client side inserts, updates, or removes
ClientCardio.deny({
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
