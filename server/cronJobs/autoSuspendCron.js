SyncedCron.add({
  name: 'Auto Suspend Trainers (Every 24 Hours)',
  schedule: function (parser) {
    return parser.text('every 24 hours');
  },
  job: function () {
    let today = moment().format("MM/DD/YYYY");

    let curUser = Meteor.users.find();

    curUser.forEach(function (user) {
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