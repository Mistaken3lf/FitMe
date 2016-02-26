const registerClient = new ValidatedMethod({
  name: "registerClient",

  validate: new SimpleSchema({
    username: {
      type: String,
      min: 2
    },

    password: {
      type: String,
      min: 2
    },

    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    },

    firstName: {
      type: String,
      min: 2
    },

    lastName: {
      type: String,
      min: 2
    },

    birthday: {
      type: String
    },

    address: {
      type: String
    },

    city: {
      type: String
    },

    state: {
      type: String
    },

    zip: {
      type: String
    },

    homePhone: {
      type: String
    },

    workPhone: {
      type: String
    },

    emergencyContact: {
      type: String
    },

    bio: {
      type: String
    },

    fitnessGoals: {
      type: String
    }

  }).validator(),

  run({
    username,
    password,
    email,
    firstName,
    lastName,
    birthday,
    address,
    city,
    state,
    zip,
    homePhone,
    workPhone,
    emergencyContact,
    bio,
    fitnessGoals
  }) {

    //Make sure the user is a trainer and logged in before
    //creating a new client
    if (Roles.userIsInRole(this.userId, "trainer")) {
      //Get the current trainer so we can check the client limit
      const currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      const trainersExpiration = currentTrainer.expiresOn;

      //Check if the trainer is suspended
      if(currentTrainer.userStatus == "suspended") {
        return "Sorry, your account is suspended";
      }

      //Get the count of total clients they have
      let currentClientCount = Meteor.users.find({
        createdBy: this.userId
      }).count();

      //Make sure the trainers client limit allows for adding more
      //clients
      if (currentTrainer.clientLimit > currentClientCount) {
        //Create the new clients username, password and email since thats
        //what the default meteor user accounts expects
        const id = Accounts.createUser({
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
            firstName: firstName,
            lastName: lastName,
            birthday: birthday,
            address: address,
            city: city,
            state: state,
            zip: zip,
            homePhone: homePhone,
            workPhone: workPhone,
            emergencyContact: emergencyContact,
            bio: bio,
            fitnessGoals: fitnessGoals,
            createdBy: Meteor.userId(),
            whosProfile: id,
            userStatus: "active",
            previouslySuspended: false,
            myTrainersExpiration: trainersExpiration
          }
        });

        //Create a stats document for the client
        ClientStats.insert({
          whosStats: id,
          createdBy: this.userId
        });

        //Create a workout document for the client
        ClientWorkout.insert({
          whosWorkout: id,
          createdBy: this.userId
        });

        //Create a cardio document for the client
        ClientCardio.insert({
          whosCardio: id,
          createdBy: this.userId
        });
      } else {
        return "Client Limit Reached";
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});