Meteor.methods({
  createClient: function (firstName, lastName, username, password, email) {
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    id = Accounts.createUser({
      username: username,
      password: password,
      email: email,

      profile: {
        firstName: firstName,
        lastName: lastName,
        createdBy: Meteor.userId()
      },
    });

    Roles.addUsersToRoles(id, 'client');
  }
});
