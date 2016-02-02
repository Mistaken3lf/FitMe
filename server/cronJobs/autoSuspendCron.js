SyncedCron.add({
  name: 'Auto Suspend Trainers (Every Day)',
  schedule(parser) {
    return parser.text('at 12:00 am');
  },

  job() {
    let today = moment().format("MM/DD/YYYY");

    let curUser = Meteor.users.find();

    curUser.forEach((user) => {
      //Suspend a trainer if their account is expired
      Meteor.users.update({
        roles: "trainer",
        expiresOn: today,
        userStatus: {
          $ne: "deleted"
        }
      }, {
        $set: {
          userStatus: "suspended"
        }
      }, {
        multi: true
      });

      if (user.userStatus == "suspended") {
        //Suspend each trainers clients as well
        Meteor.users.update({
          createdBy: user._id
        }, {
          $set: {
            userStatus: "suspended",
          }
        }, {
          multi: true
        });
      }
    });
  }
});


// Start Cronjobs
SyncedCron.start();