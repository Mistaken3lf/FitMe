Meteor.methods({
  registerClient(clientData) {
    //Make sure the user is a trainer and logged in before
    //creating a new client
    if (Roles.userIsInRole(this.userId, "trainer")) {
      //Get the current trainer so we can check the client limit
      var currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      //Get the count of total clients they have
      var currentClientCount = Meteor.users.find({
        createdBy: this.userId
      }).count();

      if (currentTrainer.clientLimit > currentClientCount) {
        //Create the new clients username, password and email since thats
        //what the default meteor user accounts expects
        id = Accounts.createUser({
          username: clientData.username,
          password: clientData.password,
          email: clientData.email,
        });

        //Assign client to the client role
        Roles.addUsersToRoles(id, 'client');

        //Update the clients document with any
        //additional fields supplied
        Meteor.users.update(id, {
          $set: {
            firstName: clientData.firstName,
            lastName: clientData.lastName,
            birthday: clientData.birthday,
            address: clientData.address,
            city: clientData.city,
            state: clientData.state,
            zip: clientData.zip,
            homePhone: clientData.homePhone,
            cellPhone: clientData.cellPhone,
            workPhone: clientData.workPhone,
            emergencyContact: clientData.emergencyContact,
            bio: clientData.bio,
            fitnessGoals: clientData.fitnessGoals,
            createdBy: Meteor.userId(),
            whosProfile: id,
            userStatus: "active",
          }
        });

        //Create a stats document for the client
        ClientStats.insert({
          whosStats: id,
          createdBy: Meteor.userId(),
        });

        //Create a workout document for the client
        ClientWorkout.insert({
          whosWorkout: id,
          createdBy: Meteor.userId(),
        });

        //Create a cardio document for the client
        ClientCardio.insert({
          whosCardio: id,
          createdBy: Meteor.userId(),
        });
      } else {
        return "Client Limit Reached";
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
