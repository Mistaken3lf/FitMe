ClientCardio = new Mongo.Collection("clientCardio");

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