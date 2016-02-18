Meteor.startup(function () {
  //Create the admin user with default admin username and password, change
  //the password after created!!!!!
  if (Meteor.users.find().count() === 0) {
    let admin = Accounts.createUser({
      username: "admin",
      password: "d1v3lop3r25",
      email: "bigt371@gmail.com",
    });

    //Set the adminas active and the first and last name
    Meteor.users.update(admin, {
      $set: {
        userStatus: "active",
        firstName: "Admin",
        lastName: "Admin",
      }
    });

    //Assign client to the client role
    Roles.addUsersToRoles(admin, 'admin');
  }
});
