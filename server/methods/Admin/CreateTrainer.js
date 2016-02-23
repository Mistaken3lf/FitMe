const CreateTrainer = new ValidatedMethod({
  name: "createTrainer",

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
    }
  }).validator(),

  run({
    username,
    password,
    email,
    firstName,
    lastName
  }) {
    //Make sure user is an admin and logged in before allowing the add
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Create the new trainer
      let newTrainerId = Accounts.createUser({
        username: username,
        password: password,
        email: email,
      });

      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(2, "weeks").format("MM/DD/YYYY");

      //Update the trainers first and last name since they are not default
      //Meteor.user fields
      Meteor.users.update(newTrainerId, {
        $set: {
          firstName: firstName,
          lastName: lastName,
          clientLimit: 1,
          userStatus: "active",
          planType: "Free",
          datePurchased: today,
          expiresOn: expires,
          hasPaid: false
        }
      });

      //Assign newly created trainer a trainer role
      Roles.addUsersToRoles(newTrainerId, 'trainer');
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
