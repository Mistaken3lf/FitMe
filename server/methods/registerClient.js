//Server method that will create a new client user
Meteor.methods({
  createClient: function (username, password, email, firstName, lastName, birthday, address, city, state, zip, homePhone, cellPhone, workPhone, emergencyContact, bio, fitnessGoals) {
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
        birthday: birthday,
        address: address,
        city: city,
        state: state,
        zip: zip,
        homePhone: homePhone,
        cellPhone: cellPhone,
        workPhone: workPhone,
        emergencyContact: emergencyContact,
        bio: bio,
        fitnessGoals: fitnessGoals,
        createdBy: Meteor.userId()
      },
    });

    //Assign client to the client role
    Roles.addUsersToRoles(id, 'client');
  }
});
