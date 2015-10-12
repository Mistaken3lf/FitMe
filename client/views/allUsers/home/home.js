Template.home.onRendered(function() {
  //Add a counter to the contact text area.
  $('input#input_text, textarea#textarea1').characterCounter();
});

Template.home.events({
  'submit form': function(event) {
    event.preventDefault();

    //Get who send the message and the actual message
    var fromWho = $('[name=fromWho]').val();
    var message = $('[name=contactMessage]').val();

    //Call the send feedback method to send us information.
    Meteor.call("sendFeedbackEmail", fromWho, message, function(error) {
      if (error) {
        Materialize.toast(error.reason, 4000, "centerToast")
      } else {
        FlowRouter.go("/");
      }
    });
  }
});
