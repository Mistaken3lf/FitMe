import {FlowRouter} from 'meteor/kadira:flow-router';
import Layout from '../'

// *********************** Common Routes ************************************ //

// HOME PAGE ROUTE
FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: <Home />,
    });
  }
});

// LOGIN ROUTE
FlowRouter.route('/login', {
  action() {
    mount(Layout, {
      content: <Login />
    });
  }
});

// REGISTER ROUTE
FlowRouter.route('/register', {
  action() {
    mount(Layout, {
      content: <Register />
    });
  }
});

// MY PROFILE ROUTE
FlowRouter.route('/myProfile', {
  action() {
    mount(Layout, {
      content: <MyProfile />
    });
  }
});

// CHANGE PASSWORD ROUTE
FlowRouter.route('/changePassword', {
  action() {
    mount(Layout, {
      content: <ChangePassword />
    });
  }
});

// FORGOT PASSWORD ROUTE
FlowRouter.route('/forgotPassword', {
  action() {
    mount(Layout, {
      content: <ForgotPassword />
    });
  }
});

// RESET PASSWORD ROUTE
FlowRouter.route('/reset-password:token', {
  action() {
    mount(Layout, {
      content: <ResetPassword />
    });
  }
});

// TERMS AND CONDITIONS ROUTE
FlowRouter.route('/termsAndConditions', {
  action() {
    mount(Layout, {
      content: <TermsAndConditions />
    });
  }
});

// CONTACT PAGE ROUTE
FlowRouter.route('/contactPage', {
  action() {
    mount(Layout, {
      content: <ContactPage />
    });
  }
});

// NOT AUTHORIZED ROUTE
FlowRouter.route('/notAuthorized', {
  action() {
    mount(Layout, {
      content: <NotAuthorized />
    });
  }
});

// NOT FOUND ROUTE
FlowRouter.notFound = {
  action() {
    mount(Layout, {
      content: <NotFound />
    });
  }
};


// *********************** Admin Routes ************************************* //

// COMMAND CENTER ROUTE
FlowRouter.route('/commandCenter', {
  action() {
    mount(Layout, {
      content: <CommandCenter />
    });
  },
});

// ADD NEW TRAINER ROUTE
FlowRouter.route('/addTrainerAdmin', {
  action() {
    mount(Layout, {
      content: <AddTrainerAdmin />
    });
  },
});

// ADMIN DASHBOARD ROUTE
FlowRouter.route('/adminDashboard/:_id', {
  action() {
    mount(Layout, {
      content: <AdminDashboard />
    });
  },
});

// ADMIN HOME ROUTE
FlowRouter.route('/adminHome', {
  action() {
    mount(Layout, {
      content: <AdminHome />
    });
  },
});

// *********************** Trainer Routes *********************************** //

// ADD NEW CLIENT ROUTE
FlowRouter.route('/addClient', {
  action() {
    mount(Layout, {
      content: <AddClient />
    });
  },
});

// CLIENT DASHBOARD ROUTE
FlowRouter.route('/clientDashboard/:_id', {
  action() {
    mount(Layout, {
      content: <ClientsDashboard />
    });
  },
});

// CURRENT CLIENTS ROUTE
FlowRouter.route('/currentClients', {
  action() {
    mount(Layout, {
      content: <CurrentClients />
    });
  },
});

// TRAINER SCHEDULE ROUTE
FlowRouter.route('/trainerSchedule', {
  action() {
    mount(Layout, {
      content: <TrainersSchedule />
    });
  },
});

// MY ACCOUNT ROUTE
FlowRouter.route('/myAccount', {
  action() {
    mount(Layout, {
      content: <MyAccount />
    });
  },
});

// TRAINER GUIDE ROUTE
FlowRouter.route('/trainerGuide', {
  action() {
    mount(Layout, {
      content: <TrainerGuide />
    });
  },
});

// TRAINER HOME ROUTE
FlowRouter.route('/trainerHome', {
  action() {
    mount(Layout, {
      content: <TrainerHome />
    });
  },
});

// *********************** Client Routes ************************************ //

// MY DASHBOARD ROUTE
FlowRouter.route('/myDashboard', {
  action() {
    mount(Layout, {
      content: <MyDashboard />
    });
  },
});

// CLIENT HOME ROUTE
FlowRouter.route('/clientHome', {
  action() {
    mount(Layout, {
      content: <ClientHome />
    });
  },
});

// ************************************************************************** //