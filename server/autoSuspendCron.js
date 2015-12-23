SyncedCron.add({
  name: 'Auto Suspend Trainers (Every 24 Hours)',
  schedule: function (parser) {
    return parser.text('every 24 hours');
  },
  job: function () {
    let today = moment().format("MM/DD/YYYY");

    // Remove matchng Documents
    Meteor.users.update({
      expiresOn: today
    }, {
      $set: {
        userStatus: "suspended"
      }
    });
  }
});


// Start Cronjobs
SyncedCron.start();