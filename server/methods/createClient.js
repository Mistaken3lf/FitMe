Meteor.methods({
  createClient: function (firstName, lastName, username, password, email) {
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Accounts.createUser({
      username: username,
      password: password,
      email: email,

      profile: {
        firstName: firstName,
        lastName: lastName
      },
    });
  }
});
