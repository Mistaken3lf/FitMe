Meteor.publish('myCardio', function () {
  if(this.userId && Roles.userIsInRole(this.userId, "client")) {
    //Find my cardio
    return ClientCardio.find({whosCardio: this.userId});
  }

  //Not authorized to access my cardio
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
    }
});
