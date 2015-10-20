Meteor.methods({
  //Register a new client with any information they enter
  //when adding a new client
  registerClient: function (clientData) {
    //Make sure the user is a trainer and logged in before
    //creating a new client
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Get the current trainer so we can check the client limit
    var currentTrainer = Meteor.users.findOne({
      _id: this.userId
    });

    //Get the count of total clients they have
    var currentClientCount = Meteor.users.find({
      "userProfile.createdBy": this.userId
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
          'userProfile.firstName': clientData.firstName,
          'userProfile.lastName': clientData.lastName,
          'userProfile.birthday': clientData.birthday,
          'userProfile.address': clientData.address,
          'userProfile.city': clientData.city,
          'userProfile.state': clientData.state,
          'userProfile.zip': clientData.zip,
          'userProfile.homePhone': clientData.homePhone,
          'userProfile.cellPhone': clientData.cellPhone,
          'userProfile.workPhone': clientData.workPhone,
          'userProfile.emergencyContact': clientData.emergencyContact,
          'userProfile.bio': clientData.bio,
          'userProfile.fitnessGoals': clientData.fitnessGoals,
          'userProfile.createdBy': Meteor.userId(),
          'userProfile.whosProfile': id,
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
      return "Client limit reached :(";
    }
  }
});
