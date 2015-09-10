Meteor.methods({
  //Update a clients cardio with the clientId passed in from
  //flow router
  updateClientCardio: function (updatedCardio, clientId) {
    //Make sure the user is a trainer and logged in before performing
    //the method
    if(!Meteor.userId() &&  Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Check data against the server cardio schema to make
    //sure it is valid
    check(updatedCardio, ClientCardio.simpleSchema());

    //Update the clients cardio with the new info
    ClientCardio.update(clientId, updatedCardio);
  }
});
