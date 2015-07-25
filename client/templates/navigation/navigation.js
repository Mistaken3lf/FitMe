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

Template.loggedin_dropdown.onRendered(function () {
  $('.dropdown').dropdown({
    belowOrigin: true,
    gutter: -10
  });
});

Template.notlogged_dropdown.onRendered(function () {
  $('.dropdown').dropdown({
    belowOrigin: true,
    gutter: -10
  });
});
