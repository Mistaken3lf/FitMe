//SHARED USER ROUTES
const allUsersRoutes = FlowRouter.group({
  name: 'allUsers',
});

//HOME PAGE ROUTE
allUsersRoutes.route('/', {
  action() {
    BlazeLayout.render('layout', {
      main: "home"
    });
  }
});

//LOGIN ROUTE
allUsersRoutes.route('/login', {
  action() {
    BlazeLayout.render('layout', {
      main: "login"
    });
  }
});

//REGISTER ROUTE
allUsersRoutes.route('/register', {
  action() {
    BlazeLayout.render('layout', {
      main: "register"
    });
  }
});

//MY PROFILE ROUTE
allUsersRoutes.route('/myProfile', {
  action() {
    BlazeLayout.render('layout', {
      main: "myProfile"
    });
  }
});

//CHANGE PASSWORD ROUTE
allUsersRoutes.route('/changePassword', {
  action() {
    BlazeLayout.render('layout', {
      main: "changePassword"
    });
  }
});

//FORGOT PASSWORD ROUTE
allUsersRoutes.route('/forgotPassword', {
  action() {
    BlazeLayout.render('layout', {
      main: "forgotPassword"
    });
  }
});

//RESET PASSWORD ROUTE
allUsersRoutes.route('/resetPassword', {
  action() {
    BlazeLayout.render('layout', {
      main: "resetPassword"
    });
  }
});

//TERMS AND CONDITIONS ROUTE
allUsersRoutes.route('/termsAndConditions', {
  action() {
    BlazeLayout.render('layout', {
      main: "termsAndConditions"
    });
  }
});

//CONTACT PAGE ROUTE
allUsersRoutes.route('/contactPage', {
  action() {
    BlazeLayout.render('layout', {
      main: "contactPage"
    });
  }
});

//INVALID ROUTE
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('layout', {
      main: "notFound"
    });
  }
};
