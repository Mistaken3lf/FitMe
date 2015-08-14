//Activate dashboard tabs
Template.clientDashboard.onRendered(function () {
  $('ul.tabs').tabs();
  $('.collapsible').collapsible({
     accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });
});
