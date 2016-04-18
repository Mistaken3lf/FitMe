import moment from 'moment';

SyncedCron.add({
  name: 'Auto Suspend Trainers (Every Day)',
  //Run every night at 3am
  schedule(parser) {
    return parser.text('at 3:00 am');
  },

  job() {
    //Get todays date
    let today = moment().format("MM/DD/YYYY");

    //Find all the users
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