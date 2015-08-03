Meteor.methods({
  createTrainer: function (firstName, lastName, username, password, email) {
    trainerId = Accounts.createUser({
      username: username,
      password: password,
      email: email,

      profile: {
        firstName: firstName,
        lastName: lastName,
      },
    });

    Roles.addUsersToRoles(trainerId, 'trainer');
  }
});
