//Activate add client modal when template is rendered
Template.clients.onRendered(function () {
  $('.clientModal').leanModal();
});

Template.clients.events({
  //Capture create client form submission
  'submit form': function(event){
    //Prevent default form submission
    event.preventDefault();

    //Get the first and last name, username, password, and email from form
    var firstName = $('[name=firstName]').val();
    var lastName = $('[name=lastName]').val();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();

    //Call server method createClient with provided info
    Meteor.call("createClient", firstName, lastName, username, password, email, function(error) {
      //Create client failed
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      } else {
        //Empty out all form inputs
        firstName = $('[name=firstName]').val('');
        lastName = $('[name=lastName]').val('');
        username = $('[name=username]').val('');
        password = $('[name=password]').val('');
        email = $('[name=email]').val('');

        //Close the add client modal
        $('#addClientModal').closeModal();
      }
    });
  }
});

Template.clients.helpers({
  //Helper function to display users in table from subscription
  'users': function () {
    return Meteor.users.find();
  }
});
