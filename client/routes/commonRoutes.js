import React from 'react';
import { mount } from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';
import Home from '../ui/pages/Home/Home.js';
import ChangePassword from '../ui/pages/ChangePassword/ChangePassword.js';
import ContactPage from '../ui/pages/ContactPage/ContactPage.js';
import ForgotPassword from '../ui/pages/ForgotPassword/ForgotPassword.js';
import Layout from '../ui/layout/MainLayout.js';
import Login from '../ui/pages/Login/Login.js';
import NotFound from '../ui/components/NotFound/NotFound.js';
import NotAuthorized from '../ui/components/NotAuthorized/NotAuthorized.js';
import Register from '../ui/pages/Register/Register.js';
import ResetPassword from '../ui/pages/ResetPassword/ResetPassword.js';
import TermsAndConditions from '../ui/pages/TermsAndConditions/TermsAndConditions.js';
import MyProfile from '../ui/containers/myProfile.js';

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
commmonRoutes.route('/reset-password:token', {
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

commmonRoutes.route('/notAuthorized', {
  action() {
    mount(Layout, {
      content: <NotAuthorized />
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
