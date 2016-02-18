const registerTrainer = new ValidatedMethod({
  name: "registerTrainer",

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
    //Create the new trainer
    let trainerId = Accounts.createUser({
      username: username,
      password: password,
      email: email,
    });

    let today = moment().format("MM/DD/YYYY");
    let expires = moment().add(1, "weeks").format("MM/DD/YYYY");

    //Update the trainers first and last name since they are not default
    //Meteor.user fields
    Meteor.users.update(trainerId, {
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
    Roles.addUsersToRoles(trainerId, 'trainer');
  }
});