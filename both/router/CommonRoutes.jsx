import React from 'react';
import { mount } from 'react-mounter';

//SHARED USER ROUTES
const commmonRoutes = FlowRouter.group({
  name: 'commonRoutes',
});

//HOME PAGE ROUTE
commmonRoutes.route('/', {
  action() {
    mount(Layout, {
      content: <Home/>,
    });
  }
});

//LOGIN ROUTE
commmonRoutes.route('/login', {
  action() {
    mount(Layout, {
      content: <Login />
    });
  }
});

//REGISTER ROUTE
commmonRoutes.route('/register', {
  action() {
    mount(Layout, {
      content: <Register />
    });
  }
});

//MY PROFILE ROUTE
commmonRoutes.route('/myProfile', {
  action() {
    mount(Layout, {
      content: <MyProfile />
    });
  }
});

//CHANGE PASSWORD ROUTE
commmonRoutes.route('/changePassword', {
  action() {
    mount(Layout, {
      content: <ChangePassword />
    });
  }
});

//FORGOT PASSWORD ROUTE
commmonRoutes.route('/forgotPassword', {
  action() {
    mount(Layout, {
      content: <ForgotPassword />
    });
  }
});

//RESET PASSWORD ROUTE
commmonRoutes.route('/resetPassword', {
  action() {
    mount(Layout, {
      content: <ResetPassword />
    });
  }
});

//TERMS AND CONDITIONS ROUTE
commmonRoutes.route('/termsAndConditions', {
  action() {
    mount(Layout, {
      content: <TermsAndConditions />
    });
  }
});

//CONTACT PAGE ROUTE
commmonRoutes.route('/contactPage', {
  action() {
    mount(Layout, {
      content: <ContactPage />
    });
  }
});

//NOT FOUND ROUTE
FlowRouter.notFound = {
  action() {
    mount(Layout, {
      content: <NotFound />
    });
  }
};
