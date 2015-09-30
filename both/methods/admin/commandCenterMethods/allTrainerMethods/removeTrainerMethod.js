////////////////////////////////////////////////////////////////////////////////
Meteor.methods({
  removeTrainer: function (trainerId) {
    //Make sure user is an admin and logged in before allowing the remove
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "admin")) {
      throw new Meteor.Error("not-authorized");
    }
    
    //Remove trainer clicked on
    Meteor.users.remove(trainerId);
  }
});
////////////////////////////////////////////////////////////////////////////////
