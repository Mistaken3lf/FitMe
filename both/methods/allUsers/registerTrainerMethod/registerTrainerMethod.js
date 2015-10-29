Meteor.methods({
  //Register a new trainer in MongoDB
  registerTrainer: function (newTrainerData) {
    //Create the new trainer
    trainerId = Accounts.createUser({
      username: newTrainerData.username,
      password: newTrainerData.password,
      email: newTrainerData.email,
    });

    //Update the trainers first and last name since they are not default
    //Meteor.user fields
    Meteor.users.update(trainerId, {
      $set: {
        'userProfile.firstName': newTrainerData.firstName,
        'userProfile.lastName': newTrainerData.lastName,
        clientLimit: 1,
        userStatus: "active",
      }
    });

    //Assign newly created trainer a trainer role
    Roles.addUsersToRoles(trainerId, 'trainer');
  }
});
