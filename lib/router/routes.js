Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render("home");
});

Router.route('/login', function () {
  this.render("login");
});

Router.route('/register', function () {
  this.render("register");
});

Router.route('/clients', {
  name: 'clients',
  template: 'clients',

  data: function() {

  },

  subscriptions: function() {
    return Meteor.subscribe('current_clients');
  },

  onBeforeAction: function() {
    var currentUser = Meteor.userId();

    if(currentUser) {
      this.next();
    }

    else {
      this.render('login');
    }
  }
});

Router.route('/workouts', {
  name: 'workouts',
  template: 'workouts',
  data: function() {
    console.log("Workouts route");
  },

  onBeforeAction: function() {
    var currentUser = Meteor.userId();

    if(currentUser) {
      this.next();
    }

    else {
      this.render('login');
    }
  }
});
