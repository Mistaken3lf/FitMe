////////////////////////////////////////////////////////////////////////////////
Meteor.methods({
  removeTrainer: function (trainerId) {
    //Make sure user is an admin and logged in before allowing the remove
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "admin")) {
      throw new Meteor.Error("not-authorized");
    }

    //Remove cardio associated with the trainer being deleted
    ClientCardio.remove({createdBy: trainerId});

    //Remove client stats associated with the trainer being deleted
    ClientStats.remove({createdBy: trainerId});

    //Remove client workouts associated with the trainer being deleted
    ClientWorkout.remove({createdBy: trainerId});

    //Remove clients associated with the current trainer you are deleting
    Meteor.users.remove({"userProfile.createdBy": trainerId});
    
    //Remove trainer clicked on
    Meteor.users.remove(trainerId);
  }
});
////////////////////////////////////////////////////////////////////////////////
