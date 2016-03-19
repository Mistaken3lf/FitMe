//Dont allow any client side inserts, updates, or deletes
Meteor.users.deny({
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