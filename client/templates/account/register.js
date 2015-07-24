Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var first_name = $('[name=first_name]').val();
    var last_name = $('[name=last_name]').val();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();

    Accounts.createUser({
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      email: email
    },

    function(error) {
      if(error) {
        alert(error.reason);
      }

      else {
        Router.go('/');
      }
    });
  }
});
