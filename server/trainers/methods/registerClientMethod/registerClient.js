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
    });

    //Assign client to the client role
    Roles.addUsersToRoles(id, 'client');

    Meteor.users.update(id, {$set:
      {
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
        'userProfile.createdBy': Meteor.userId()
      }});
  }
});
