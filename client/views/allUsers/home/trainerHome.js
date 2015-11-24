Template.trainerHome.events({
  'submit form': function (event) {
    event.preventDefault();
    //Get who send the message and the actual message
    var firstName = $('[name=firstName]').val();
    var lastName = $('[name=lastName]').val();
    var phoneNumber = $('[name=phoneNumber]').val();
    var email = $('[name=email]').val();
    var message = $('[name=message]').val();
    //Call the send feedback method to send us information.
    Meteor.call("contactUs", firstName, lastName, phoneNumber, email, message, function (error) {
      if (error) {
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        Bert.alert("Email successfully sent", 'success', 'growl-top-right');
        firstName = $('[name=firstName]').val('');
        lastName = $('[name=lastName]').val('');
        phoneNumber = $('[name=phoneNumber]').val('');
        email = $('[name=email]').val('');
        message = $('[name=message]').val('');
        FlowRouter.go("/");
      }
    });
  },

  "click .monthly": function (event) {
    Meteor.call("updateClientCount", function (error) {
      if (error) {
        Bert.alert(error.reason, "danger", "growl-top-right");
      } else {
        Bert.alert("Thank you for choosing FitMe :)", "success", "growl-top-right");
      }
    });
  },

  "click .sixMonth": function (event) {
    Meteor.call("updateClientCount", function (error) {
      if (error) {
        Bert.alert(error.reason, "danger", "growl-top-right");
      } else {
        Bert.alert("Thank you for choosing FitMe :)", "success", "growl-top-right");
      }
    });
  },

  "click .yearly": function (event) {
    Meteor.call("updateClientCount", function (error) {
      if (error) {
        Bert.alert(error.reason, "danger", "growl-top-right");
      } else {
        Bert.alert("Thank you for choosing FitMe :)", "success", "growl-top-right");
      }
    });
  },
});

Template.trainerHome.helpers({
  isLoggingIn: function () {
    return Meteor.loggingIn();
  }
})