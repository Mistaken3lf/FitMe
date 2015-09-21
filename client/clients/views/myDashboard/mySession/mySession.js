Template.mySession.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe("myProfile");
  });
});

Template.mySession.helpers({
  thisClient: function () {
    return Meteor.users.findOne({ _id: Meteor.userId() });
  },
});
