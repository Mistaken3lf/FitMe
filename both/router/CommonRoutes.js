//SHARED USER ROUTES
const commmonRoutes = FlowRouter.group({
  name: 'commonRoutes',
});

//HOME PAGE ROUTE
commmonRoutes.route('/', {
  action() {
    BlazeLayout.render('layout', {
      main: "home"
    });
  }
});

//LOGIN ROUTE
commmonRoutes.route('/login', {
  action() {
    BlazeLayout.render('layout', {
      main: "login"
    });
  }
});

//REGISTER ROUTE
commmonRoutes.route('/register', {
  action() {
    BlazeLayout.render('layout', {
      main: "register"
    });
  }
});

//MY PROFILE ROUTE
commmonRoutes.route('/myProfile', {
  action() {
    BlazeLayout.render('layout', {
      main: "myProfile"
    });
  }
});

//CHANGE PASSWORD ROUTE
commmonRoutes.route('/changePassword', {
  action() {
    BlazeLayout.render('layout', {
      main: "changePassword"
    });
  }
});

//FORGOT PASSWORD ROUTE
commmonRoutes.route('/forgotPassword', {
  action() {
    BlazeLayout.render('layout', {
      main: "forgotPassword"
    });
  }
});

//RESET PASSWORD ROUTE
commmonRoutes.route('/resetPassword', {
  action() {
    BlazeLayout.render('layout', {
      main: "resetPassword"
    });
  }
});

//TERMS AND CONDITIONS ROUTE
commmonRoutes.route('/termsAndConditions', {
  action() {
    BlazeLayout.render('layout', {
      main: "termsAndConditions"
    });
  }
});

//CONTACT PAGE ROUTE
commmonRoutes.route('/contactPage', {
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
