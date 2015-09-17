////////////////////////////////////////////////////////////////////////////////
Meteor.publish('myCardio', function() {
  //Make sure the user is a client and logged in before publishing
  //their cardio
  if (this.userId && Roles.userIsInRole(this.userId, "client")) {
    //Find the logged in clients cardio
    return ClientCardio.find({
      whosCardio: this.userId
    });
  }

  //Not authorized to access my cardio
  else {
    throw new Meteor.Error("not-authorized");

    //Return ready so flow router is not waiting for nothing
    return this.ready();
  }
});
////////////////////////////////////////////////////////////////////////////////
