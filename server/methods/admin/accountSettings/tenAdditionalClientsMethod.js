Meteor.methods({
  tenAdditionalClients(trainerId) {
    new SimpleSchema({
        trainerId: {
          type: String
        }
      }).validate({
        trainerId
      });
    
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Add 10 clients to the trainers client limit
      Meteor.users.update({
        _id: trainerId
      }, {
        $inc: {
          clientLimit: 10,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
