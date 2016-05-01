import moment from 'moment';

const setLoginStatus = new ValidatedMethod({
  name: "setLoginStatus",

  validate: null,

  run() {
    if (Meteor.userId()) {
      //Find the current user
      const currentUser = Meteor.users.findOne({
        _id: this.userId
      });

      //Get todays date
      let today = moment().format("MM/DD/YYYY");

      //Set the newly logged in date to today
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