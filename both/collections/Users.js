//Dont allow any client side inserts, updates, or removes
Meteor.users.deny({
  insert() {
      return true
    },
    update() {
      return true
    },
    remove() {
      return true
    },
});

//Create index to search based on the current clients publication
//and dont select the currently logged in user
TrainersClientsIndex = new EasySearch.Index({
  collection: Meteor.users,
  fields: ['username', 'firstName', 'lastName', 'userStatus'],
  engine: new EasySearch.Minimongo({
    selector: function (searchObject, options, aggregation) {
      var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

      var userId = options.search.userId;
      selector._id = {
        $ne: userId,
      };

      selector.roles = {
        $ne: "trainer",
      };

      return selector;
    }
  })
});

//Create search index to search all active trainers
ActiveTrainersIndex = new EasySearch.Index({
  collection: Meteor.users,
  fields: ['username', 'firstName', 'lastName', 'planType'],
  engine: new EasySearch.Minimongo({
    selector: function (searchObject, options, aggregation) {
      var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

      var userId = options.search.userId;
      selector._id = {
        $ne: userId,
      };

      selector.roles = {
        $ne: "client",
      };

      selector.userStatus = "active";
      return selector;
    }
  })
});

//Create search index to search all suspended trainers
SuspendedTrainersIndex = new EasySearch.Index({
  collection: Meteor.users,
  fields: ['username', 'firstName', 'lastName', 'planType'],
  engine: new EasySearch.Minimongo({
    selector: function (searchObject, options, aggregation) {
      var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

      var userId = options.search.userId;
      selector._id = {
        $ne: userId,
      };

      selector.roles = {
        $ne: "client",
      };

      selector.userStatus = "suspended";
      return selector;
    }
  })
});

//Create search index to search all deleted trainers
DeletedTrainersIndex = new EasySearch.Index({
  collection: Meteor.users,
  fields: ['username', 'firstName', 'lastName', 'planType'],
  engine: new EasySearch.Minimongo({
    selector: function (searchObject, options, aggregation) {
      var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

      var userId = options.search.userId;
      selector._id = {
        $ne: userId,
      };

      selector.roles = {
        $ne: "client",
      };

      selector.userStatus = "deleted";
      return selector;
    }
  })
});