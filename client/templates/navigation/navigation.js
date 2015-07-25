Template.navigation.events ({
  'click .logout': function(event) {
    event.preventDefault();
    Router.go('/');
    Meteor.logout();
  }
});

Template.navigation.onRendered(function () {
  $('.button-collapse').sideNav({
    edge: 'left',
    closeOnClick: true
  });
});
