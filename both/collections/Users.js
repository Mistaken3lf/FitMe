//Dont allow any client side inserts, updates, or removes
Meteor.users.deny({
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