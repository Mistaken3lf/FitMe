Meteor.methods({
  //Register a new client with any information they enter
  //when adding a new client
  registerClient: function (username, password, email, firstName, lastName, birthday, address, city, state, zip, homePhone, cellPhone, workPhone, emergencyContact, bio, fitnessGoals) {
    //Make sure the user is a trainer and logged in before
    //creating a new client
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    var currentTrainer = Meteor.users.findOne({
      _id: this.userId
    });

    var currentClientCount = Meteor.users.find({
      "userProfile.createdBy": this.userId
    }).count();

    if (currentTrainer.clientLimit > currentClientCount) {
      //Create the new clients username, password and email since thats
      //what the default meteor user accounts expects
      id = Accounts.createUser({
        username: username,
        password: password,
        email: email,
      });

      //Assign client to the client role
      Roles.addUsersToRoles(id, 'client');

      //Update the clients document with any
      //additional fields supplied
      Meteor.users.update(id, {
        $set: {
          'userProfile.firstName': firstName,
          'userProfile.lastName': lastName,
          'userProfile.birthday': birthday,
          'userProfile.address': address,
          'userProfile.city': city,
          'userProfile.state': state,
          'userProfile.zip': zip,
          'userProfile.homePhone': homePhone,
          'userProfile.cellPhone': cellPhone,
          'userProfile.workPhone': workPhone,
          'userProfile.emergencyContact': emergencyContact,
          'userProfile.bio': bio,
          'userProfile.fitnessGoals': fitnessGoals,
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
