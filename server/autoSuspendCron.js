SyncedCron.add({
  name: 'Auto Suspend Trainers (Every 24 Hours)',
  schedule: function (parser) {
    return parser.text('every 24 hours');
  },
  job: function () {
    let today = moment().format("MM/DD/YYYY");

    //Suspend a trainer if their account is expired
    Meteor.users.update({
      expiresOn: today
    }, {
      $set: {
        userStatus: "suspended"
      }
    });
    
    //Suspend the trainers clients if their trainers account is expired
    Meteor.users.update({
      paymentDue: today
    }, {
      $set: {
        userStatus: "suspended",
      }
    }, {
      multi: true
    });
  }
});


// Start Cronjobs
SyncedCron.start();