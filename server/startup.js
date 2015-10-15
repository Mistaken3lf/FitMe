Meteor.startup(function () {
  //Setup email enviroment variable to use our mailgun SMTP server
  process.env.MAIL_URL = 'smtp://postmaster%40mistaken3lf.meteor.com:e4f504ee1b19376fe0c147820ce4847e@smtp.mailgun.org:587';

  //Create the admin user with default admin username and password, change
  //the password after created!!!!!
  if (Meteor.users.find().count() === 0) {
    admin = Accounts.createUser({
      username: "admin",
      password: "admin",
      email: "bigt371@gmail.com",
    });

    Meteor.users.update(admin, {
      $set: {
        userStatus: "active",
        'userProfile.firstName': "Admin",
        'userProfile.lastName': "Admin",
      }
    });

    //Assign client to the client role
    Roles.addUsersToRoles(admin, 'admin');
  }
});
