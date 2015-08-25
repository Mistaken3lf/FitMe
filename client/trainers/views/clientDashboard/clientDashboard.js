//Activate dashboard tabs
Template.clientDashboard.onRendered(function () {
  $('.collapsible').collapsible({
    accordion: true,
  });
});

Template.clientDashboard.helpers({
  isReady: function(sub) {
    if(sub) {
      return FlowRouter.subsReady(sub);
    } else {
      return FlowRouter.subsReady();
    }
  },
});
