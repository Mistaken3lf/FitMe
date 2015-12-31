SyncedCron.add({
  name: 'Auto Suspend Trainers (Every 36 Hours)',
  schedule(parser) {
    return parser.text('every 36 hours');
  },
  job() {
    let today = moment().format("MM/DD/YYYY");

    let curUser = Meteor.users.find();

    curUser.forEach((user) => {
      //Suspend a trainer if their account is expired
      Meteor.users.update({
        roles: "trainer",
        expiresOn: today
      }, {
        $set: {
          userStatus: "suspended"
        }
      }, {
        multi: true
      });
      
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

    });
  }
});


// Start Cronjobs
SyncedCron.start();