Meteor.methods({
  //Create a new trainer for the admin
  createTrainer: function (newTrainerData) {
    //Make sure user is an admin and logged in before allowing the add
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "admin")) {
      throw new Meteor.Error("not-authorized");
    }

    //Prevent them hackers!!!
    check(newTrainerData, RegisterSchema.register);

    //Create the new trainer
    newTrainerId = Accounts.createUser({
      username: newTrainerData.username,
      password: newTrainerData.password,
      email: newTrainerData.email,
    });

    //Update the trainers first and last name since they are not default
    //Meteor.user fields
    Meteor.users.update(newTrainerId, {
      $set: {
        'userProfile.firstName': newTrainerData.firstName,
        'userProfile.lastName': newTrainerData.lastName,
        clientLimit: 50,
        userStatus: "active",
      }
    });

    //Assign newly created trainer a trainer role
    Roles.addUsersToRoles(newTrainerId, 'trainer');
  }
});
