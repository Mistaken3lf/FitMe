Meteor.methods({
  createTrainer: function (firstName, lastName, username, password, email) {
    Accounts.createUser({
      username: username,
      password: password,
      email: email,

      profile: {
        firstName: firstName,
        lastName: lastName,
      },
    });
  }
});
