////////////////////////////////////////////////////////////////////////////////
Meteor.methods({
  //Create a new trainer for the admin
  createTrainer: function (firstName, lastName, username, password, email) {
     //Make sure user is an admin and logged in before allowing the add
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "admin")) {
      throw new Meteor.Error("not-authorized");
    }
    
    //Create the new trainer
    newTrainerId = Accounts.createUser({
      username: username,
      password: password,
      email: email,
    });

    //Update the trainers first and last name since they are not default
    //Meteor.user fields
    Meteor.users.update(newTrainerId, {
      $set: {
        'userProfile.firstName': firstName,
        'userProfile.lastName': lastName,
        clientLimit: 0,
      }
    });

    //Assign newly created trainer a trainer role
    Roles.addUsersToRoles(newTrainerId, 'trainer');
  }
});
////////////////////////////////////////////////////////////////////////////////