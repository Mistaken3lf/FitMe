Meteor.methods({
  //Register a new trainer in MongoDB
  registerTrainer: function(firstName, lastName, username, password, email) {
    //Create the new trainer
    trainerId = Accounts.createUser({
      username: username,
      password: password,
      email: email,
    });

    //Update the trainers first and last name since they are not default
    //Meteor.user fields
    Meteor.users.update(trainerId, {
      $set: {
        'userProfile.firstName': firstName,
        'userProfile.lastName': lastName,
        clientLimit: 0,
        userStatus: "active",
      }
    });

    //Assign newly created trainer a trainer role
    Roles.addUsersToRoles(trainerId, 'trainer');
  }
});
