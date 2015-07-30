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
