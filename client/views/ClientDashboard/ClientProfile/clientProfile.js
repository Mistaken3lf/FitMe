Template.clientProfile.onRendered(function () {
  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 25, // Creates a dropdown of 25 years to control year
      autoclose: true,
      format: "yyyy-mm-dd",
    });
});
