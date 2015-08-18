//Server method that will create a trainer and assign
//them a trainer role
Meteor.methods({
  registerTrainer: function (firstName, lastName, username, password, email) {
    //Create the new trainer
    trainerId = Accounts.createUser({
      username: username,
      password: password,
      email: email,
    });

    //Assign newly created trainer a trainer role
    Roles.addUsersToRoles(trainerId, 'trainer');

    Meteor.users.update({}, {$set:
      {
        'userProfile.firstName': firstName,
        'userProfile.lastName': lastName,
      }});
  }
});
