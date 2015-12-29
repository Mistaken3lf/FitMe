Meteor.methods({
  //Register a new trainer in MongoDB
  registerTrainer(newTrainerData) {
    //Create the new trainer
    let trainerId = Accounts.createUser({
      username: newTrainerData.username,
      password: newTrainerData.password,
      email: newTrainerData.email,
    });

    let today = moment().format("MM/DD/YYYY");
    let expires = moment().add(2, "weeks").format("MM/DD/YYYY");

    //Update the trainers first and last name since they are not default
    //Meteor.user fields
    Meteor.users.update(trainerId, {
      $set: {
        firstName: newTrainerData.firstName,
        lastName: newTrainerData.lastName,
        clientLimit: 1,
        userStatus: "active",
        planType: "Free",
        datePurchased: today,
        expiresOn: expires,
        hasPaid: false
      }
    });

    //Assign newly created trainer a trainer role
    Roles.addUsersToRoles(trainerId, 'trainer');
  }
});
