Meteor.methods({
  createTrainer: function (newTrainerData) {
    //Make sure user is an admin and logged in before allowing the add
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Create the new trainer
      newTrainerId = Accounts.createUser({
        username: newTrainerData.username,
        password: newTrainerData.password,
        email: newTrainerData.email,
      });
      
      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(2, "weeks").format("MM/DD/YYYY");

      //Update the trainers first and last name since they are not default
      //Meteor.user fields
      Meteor.users.update(newTrainerId, {
        $set: {
          firstName: newTrainerData.firstName,
          lastName: newTrainerData.lastName,
          clientLimit: 1,
          userStatus: "active",
          planType: "Free",
          datePurchased: today,
          expiresOn: expires
        }
      });

      //Assign newly created trainer a trainer role
      Roles.addUsersToRoles(newTrainerId, 'trainer');
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
