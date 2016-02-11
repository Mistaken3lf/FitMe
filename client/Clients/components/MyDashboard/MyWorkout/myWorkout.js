Template.myWorkout.onCreated(function () {
  //Subscribe to my currently assigned workout
  this.autorun(() => {
    this.subscribe("myWorkout");
  });
});

Template.myWorkoutShell.helpers({
  //Find my workout in MongoDB
  myWorkout() {
    const myWorkout = ClientWorkout.findOne({
      whosWorkout: Meteor.userId()
    });
    
    return myWorkout;
  },
});
