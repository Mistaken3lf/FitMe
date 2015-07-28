Template.clients.onRendered(function () {
  $('.modal-trigger').leanModal();
});

Template.clients.events({
  'submit form': function(event){
    event.preventDefault();
    var firstName = $('[name=firstName]').val();
    var lastName = $('[name=lastName]').val();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();

    Accounts.createUser({
      username: username,
      password: password,
      email: email,

      profile: {
        firstName: firstName,
        lastName: lastName
      },
    },

    function(error) {
      if(error) {
        alert(error.reason);
      }

      else {
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
