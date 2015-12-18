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
        receipt_email: token.email
      };

      Meteor.call('processPayment', charge, (error, response) => {
        if (error) {
          template.processing.set(false);
          Bert.alert(error.reason, 'danger');
        } else {
          if (planType == "One Month") {
            Meteor.call('monthlyPlan', Meteor.userId());
          }

          if (planType == "Six Month") {
            Meteor.call("sixMonthPlan", Meteor.userId());
          }

          if (planType == "One Year") {
            Meteor.call("yearlyPlan", Meteor.userId());
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
    template.checkout.open({
      name: 'One Month',
      description: "1 Month Of Usage",
      amount: 2000,
      bitcoin: false
    });

    planType = "One Month";
    dollarAmount = 2000;
  },

  'click .sixMonth' (event, template) {
    template.checkout.open({
      name: 'Six Month',
      description: "Six Month's Of Access",
      amount: 11000,
      bitcoin: false
    });

    planType = "Six Month";
    dollarAmount = 11000;
  },

  'click .oneYear' (event, template) {
    template.checkout.open({
      name: 'One Year',
      description: "1 Year Of Access",
      amount: 21000,
      bitcoin: false
    });

    planType = "One Year";
    dollarAmount = 21000;
  }
});