//Server method that will create a new client user
Meteor.methods({
  createClient: function (firstName, lastName, username, password, email) {
    //Make sure they are logged in before creating a user
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    //Create the new client
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

    //Assign client to the client role
    Roles.addUsersToRoles(id, 'client');
  }
});
