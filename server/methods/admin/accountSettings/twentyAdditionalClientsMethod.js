Meteor.methods({
  twentyAdditionalClients(trainerId) {
    new SimpleSchema({
        trainerId: {
          type: String
        }
      }).validate({
        trainerId
      });
    
    if (Roles.userIsInRole(this.userId, "admin")) {
      Meteor.users.update({
        _id: trainerId
      }, {
        $inc: {
          clientLimit: 20,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
