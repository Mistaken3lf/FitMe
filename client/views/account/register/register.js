Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var firstName = $('[name=firstName]').val();
    var lastName = $('[name=lastName]').val();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();

    Meteor.call("createTrainer", firstName, lastName, username, password, email, function(error) {
      if(error) {
        Materialize.toast(error.reason, 4000, "centerToast")
      }

      else {
        Meteor.loginWithPassword(username, password, function(error){
          if(error) {
            Materialize.toast(error.reason, 4000, "centerToast")
          }

          else {
            Router.go('/');
          }
        });
      }
    });
  }
});
