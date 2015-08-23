Meteor.methods({
  updateClientCardio: function (updatedCardio, clientId) {

    //Make sure user is logged in
    if(!Meteor.userId() &&  Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Make sure data is valid
    check(updatedCardio, ClientCardio.simpleSchema());

    //Update the clients cardio with the new info
    ClientCardio.update(clientId, updatedCardio);
  }
});
