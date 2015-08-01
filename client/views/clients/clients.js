//Activate add client modal when template is rendered
Template.clients.onRendered(function () {
  $('.clientModal').leanModal();
});

Template.clients.events({
  'submit form': function(event){
    event.preventDefault();
    var firstName = $('[name=firstName]').val();
    var lastName = $('[name=lastName]').val();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();

    Meteor.call("createClient", firstName, lastName, username, password, email, function(error) {
      if(error) {
        Materialize.toast(error.reason, 4000, "centerToast")
      }

      else {
        firstName = $('[name=firstName]').val('');
        lastName = $('[name=lastName]').val('');
        username = $('[name=username]').val('');
        password = $('[name=password]').val('');
        email = $('[name=email]').val('');
        $('#addClientModal').closeModal();
        Router.go('/clients');
      }
    });
  }
});

Template.clients.helpers({
  'users': function () {
    return Meteor.users.find();
  }
});
