//SHARED USER ROUTES
var allUsersRoutes = FlowRouter.group({
  name: 'allUsers',
});

//HOME PAGE ROUTE
allUsersRoutes.route('/', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "home"
    });
  }
});

//LOGIN ROUTE
allUsersRoutes.route('/login', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "login"
    });
  }
});

//REGISTER ROUTE
allUsersRoutes.route('/register', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "register"
    });
  }
});

//MY PROFILE ROUTE
allUsersRoutes.route('/myProfile', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "myProfile"
    });
  }
});

//CHANGE PASSWORD ROUTE
allUsersRoutes.route('/changePassword', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "changePassword"
    });
  }
});

//FORGOT PASSWORD ROUTE
allUsersRoutes.route('/forgotPassword', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "forgotPassword"
    });
  }
});

//RESET PASSWORD ROUTE
allUsersRoutes.route('/resetPassword', {
  action: function () {
    BlazeLayout.render('layout', {
      main: "resetPassword"
    });
  }
});

//INVALID ROUTE
FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render('layout', {
      main: "notFound"
    });
  }
};
