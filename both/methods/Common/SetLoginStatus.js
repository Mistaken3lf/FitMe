Meteor.methods({
  setLoginStatus() {
    //Make sure user is logged in before letting them update
    //a profile
    if (Meteor.userId()) {
      const currentUser = Meteor.users.findOne({
        _id: this.userId
      });

      if (currentUser.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

      let today = moment().format("MM/DD/YYYY");

      //Update the users new profile
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          lastLogin: today
        }
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});