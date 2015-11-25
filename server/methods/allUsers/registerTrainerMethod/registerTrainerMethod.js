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
        firstName: newTrainerData.firstName,
        lastName: newTrainerData.lastName,
        clientLimit: 1,
        userStatus: "active",
        planType: "Free",
      }
    });

    //Assign newly created trainer a trainer role
    Roles.addUsersToRoles(trainerId, 'trainer');
  }
});
