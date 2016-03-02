//SHARED USER ROUTES
const commmonRoutes = FlowRouter.group({
  name: 'commonRoutes',
});

//HOME PAGE ROUTE
commmonRoutes.route('/', {
  action() {
    ReactLayout.render(Layout, {
      content: <Home />
    });
  }
});

//LOGIN ROUTE
commmonRoutes.route('/login', {
  action() {
    ReactLayout.render(Layout, {
      content: <Login />
    });
  }
});

//REGISTER ROUTE
commmonRoutes.route('/register', {
  action() {
    ReactLayout.render(Layout, {
      content: <Register />
    });
  }
});

//MY PROFILE ROUTE
commmonRoutes.route('/myProfile', {
  action() {
    ReactLayout.render(Layout, {
      content: <MyProfile />
    });
  }
});

//CHANGE PASSWORD ROUTE
commmonRoutes.route('/changePassword', {
  action() {
    ReactLayout.render(Layout, {
      content: <ChangePassword />
    });
  }
});

//FORGOT PASSWORD ROUTE
commmonRoutes.route('/forgotPassword', {
  action() {
    ReactLayout.render(Layout, {
      content: <ForgotPassword />
    });
  }
});

//RESET PASSWORD ROUTE
commmonRoutes.route('/resetPassword', {
  action() {
    ReactLayout.render(Layout, {
      content: <ResetPassword />
    });
  }
});

//TERMS AND CONDITIONS ROUTE
commmonRoutes.route('/termsAndConditions', {
  action() {
    ReactLayout.render(Layout, {
      content: <TermsAndConditions />
    });
  }
});

//CONTACT PAGE ROUTE
commmonRoutes.route('/contactPage', {
  action() {
    ReactLayout.render(Layout, {
      content: <ContactPage />
    });
  }
});

//INVALID ROUTE
FlowRouter.notFound = {
  action() {
    ReactLayout.render(Layout, {
      content: <NotFound />
    });
  }
};
