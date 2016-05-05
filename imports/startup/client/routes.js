import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import MainLayout from '../../ui/shared/layouts/MainLayout.js';

// *********************** Common Routes ************************************ //

// HOME PAGE ROUTE
FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: <Home />,
    });
  },
});

// LOGIN ROUTE
FlowRouter.route('/login', {
  action() {
    mount(MainLayout, {
      content: <Login />,
    });
  },
});

// REGISTER ROUTE
FlowRouter.route('/register', {
  action() {
    mount(MainLayout, {
      content: <Register />,
    });
  },
});

// MY PROFILE ROUTE
FlowRouter.route('/myProfile', {
  action() {
    mount(MainLayout, {
      content: <MyProfile />,
    });
  },
});

// CHANGE PASSWORD ROUTE
FlowRouter.route('/changePassword', {
  action() {
    mount(MainLayout, {
      content: <ChangePassword />,
    });
  },
});

// FORGOT PASSWORD ROUTE
FlowRouter.route('/forgotPassword', {
  action() {
    mount(MainLayout, {
      content: <ForgotPassword />,
    });
  },
});

// RESET PASSWORD ROUTE
FlowRouter.route('/reset-password:token', {
  action() {
    mount(MainLayout, {
      content: <ResetPassword />,
    });
  },
});

// TERMS AND CONDITIONS ROUTE
FlowRouter.route('/termsAndConditions', {
  action() {
    mount(MainLayout, {
      content: <TermsAndConditions />,
    });
  },
});

// CONTACT PAGE ROUTE
FlowRouter.route('/contactPage', {
  action() {
    mount(MainLayout, {
      content: <ContactPage />,
    });
  },
});

// NOT AUTHORIZED ROUTE
FlowRouter.route('/notAuthorized', {
  action() {
    mount(MainLayout, {
      content: <NotAuthorized />,
    });
  },
});

// NOT FOUND ROUTE
FlowRouter.notFound = {
  action() {
    mount(MainLayout, {
      content: <NotFound />,
    });
  },
};


// *********************** Admin Routes ************************************* //

// COMMAND CENTER ROUTE
FlowRouter.route('/commandCenter', {
  action() {
    mount(MainLayout, {
      content: <CommandCenter />,
    });
  },
});

// ADD NEW TRAINER ROUTE
FlowRouter.route('/addTrainerAdmin', {
  action() {
    mount(MainLayout, {
      content: <AddTrainerAdmin />,
    });
  },
});

// ADMIN DASHBOARD ROUTE
FlowRouter.route('/adminDashboard/:_id', {
  action() {
    mount(MainLayout, {
      content: <AdminDashboard />,
    });
  },
});

// ADMIN HOME ROUTE
FlowRouter.route('/adminHome', {
  action() {
    mount(MainLayout, {
      content: <AdminHome />,
    });
  },
});

// *********************** Trainer Routes *********************************** //

// ADD NEW CLIENT ROUTE
FlowRouter.route('/addClient', {
  action() {
    mount(MainLayout, {
      content: <AddClient />,
    });
  },
});

// CLIENT DASHBOARD ROUTE
FlowRouter.route('/clientDashboard/:_id', {
  action() {
    mount(MainLayout, {
      content: <ClientsDashboard />,
    });
  },
});

// CURRENT CLIENTS ROUTE
FlowRouter.route('/currentClients', {
  action() {
    mount(MainLayout, {
      content: <CurrentClients />,
    });
  },
});

// TRAINER SCHEDULE ROUTE
FlowRouter.route('/trainerSchedule', {
  action() {
    mount(MainLayout, {
      content: <TrainersSchedule />,
    });
  },
});

// MY ACCOUNT ROUTE
FlowRouter.route('/myAccount', {
  action() {
    mount(MainLayout, {
      content: <MyAccount />,
    });
  },
});

// TRAINER GUIDE ROUTE
FlowRouter.route('/trainerGuide', {
  action() {
    mount(MainLayout, {
      content: <TrainerGuide />,
    });
  },
});

// TRAINER HOME ROUTE
FlowRouter.route('/trainerHome', {
  action() {
    mount(MainLayout, {
      content: <TrainerHome />,
    });
  },
});

// *********************** Client Routes ************************************ //

// MY DASHBOARD ROUTE
FlowRouter.route('/myDashboard', {
  action() {
    mount(MainLayout, {
      content: <MyDashboard />,
    });
  },
});

// CLIENT HOME ROUTE
FlowRouter.route('/clientHome', {
  action() {
    mount(MainLayout, {
      content: <ClientHome />,
    });
  },
});

// ************************************************************************** //
