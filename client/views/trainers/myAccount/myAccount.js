let planType = "";
let dollarAmount = 0

Template.myAccount.onCreated(function () {
  var self = this;

  //Subscribe all the trainers current clients
  self.autorun(function () {
    self.subscribe("myProfile");
    self.subscribe("currentClients");
  });

  let template = Template.instance();

  let currentTrainer = Meteor.users.findOne({
    _id: Meteor.userId()
  });

  template.processing = new ReactiveVar(false);

  template.checkout = StripeCheckout.configure({
    key: Meteor.settings.public.stripe,
    locale: 'auto',
    token(token) {
      charge = {
        amount: dollarAmount,
        currency: 'usd',
        source: token.id,
        description: planType,
        receipt_email: currentTrainer.emails[0].address
      };

      Meteor.call('processPayment', charge, (error, response) => {
        if (error) {
          template.processing.set(false);
          Bert.alert(error.reason, 'danger');
        } else {
          if (planType == "One Month") {
            Bert.alert('Thank You For Choosing FitMe', 'success');
            Meteor.call('oneMonthPlanTrainer', Meteor.userId());
          }

          if (planType == "Six Month") {
            Bert.alert('Thank You For Choosing FitMe', 'success');
            Meteor.call("sixMonthPlanTrainer", Meteor.userId());
          }

          if (planType == "One Year") {
            Bert.alert('Thank You For Choosing FitMe', 'success');
            Meteor.call("oneYearPlanTrainer", Meteor.userId());
          }
        }
      });
    },
    closed() {
      template.processing.set(false);
    }
  });
});

Template.myAccount.helpers({
  myAccount: function () {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    });
  },

  formatDate: function (loginDate) {
    return loginDate.toDateString();
  },

  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },

  totalClients: function () {
    return Meteor.users.find({
      createdBy: Meteor.userId()
    }).count();
  },

  processing() {
    return Template.instance().processing.get();
  },

  paidAccount() {
    let thisTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });
    if (thisTrainer.hasPaid) {
      return true;
    } else {
      return false;
    }
  },

  isSuspended() {
    let thisTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });
    if (thisTrainer.userStatus == "suspended") {
      return true;
    } else {
      return false;
    }
  }
});

Template.myAccount.events({
  "click .deleteAccount": function (event) {
    //Needed for sweet alerts
    var previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Are you sure?",
      text: "Your account and all clients will be removed!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete account!",
      closeOnConfirm: false
    }, function (isConfirm) {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Delete!', 'Your account has been removed.', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("deleteAccount");
        FlowRouter.go("/");
      } else {
        swal('Cancelled', 'Account is safe now.', 'error');
      }
    });
  },

  'click .oneMonth' (event, template) {
    let currentTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    //Needed for sweet alerts
    var previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Terms and Conditions?",
      text: "You will be prompted for payment provided by stripe all payments are handled through them securely over https",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, continue!",
      closeOnConfirm: true
    }, function (isConfirm) {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        template.checkout.open({
          email: currentTrainer.emails[0].address,
          name: 'One Month',
          description: "1 Month Of Access",
          amount: 2000,
          bitcoin: false
        });

        planType = "One Month";
        dollarAmount = 2000;

      } else {
        swal('Cancelled', 'You Will Not Be Charged.', 'error');
      }
    });
  },

  'click .sixMonth' (event, template) {
    let currentTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    //Needed for sweet alerts
    var previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Terms and Conditions?",
      text: "You will be prompted for payment provided by stripe all payments are handled through them securely over https",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, continue!",
      closeOnConfirm: true
    }, function (isConfirm) {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        template.checkout.open({
          email: currentTrainer.emails[0].address,
          name: 'Six Month',
          description: "Six Month's Of Access",
          amount: 11000,
          bitcoin: false
        });

        planType = "Six Month";
        dollarAmount = 11000;

      } else {
        swal('Cancelled', 'You Will Not Be Charged.', 'error');
      }
    });
  },

  'click .oneYear' (event, template) {
    let currentTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    //Needed for sweet alerts
    var previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Terms and Conditions?",
      text: "You will be prompted for payment provided by stripe all payments are handled through them securely over https",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, continue!",
      closeOnConfirm: true
    }, function (isConfirm) {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        template.checkout.open({
          email: currentTrainer.emails[0].address,
          name: 'One Year',
          description: "1 Year Of Access",
          amount: 21000,
          bitcoin: false
        });

        planType = "One Year";
        dollarAmount = 21000;

      } else {
        swal('Cancelled', 'You Will Not Be Charged.', 'error');
      }
    });
  },

  'click .free': function (event) {
    let currentTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    //Needed for sweet alerts
    var previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Reset Your Account To Free?",
      text: "You will lose all your current clients and your client limit will be dropped to 1",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, continue!",
      closeOnConfirm: true
    }, function (isConfirm) {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        Meteor.call("freeAccountTrainer", Meteor.userId());
        Bert.alert('Thank You For Choosing FitMe', 'success');
      } else {
        swal('Cancelled', 'Your account will not be reset.', 'error');
      }
    });
  },


});