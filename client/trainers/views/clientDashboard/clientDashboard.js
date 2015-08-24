//Activate dashboard tabs
Template.clientDashboard.onRendered(function () {
  $('.collapsible').collapsible({
    accordion: true,
  });
});
