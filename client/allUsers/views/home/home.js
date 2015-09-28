Template.home.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 225,
    autoclose: true,
    format: "yyyy-mm-dd",
  });

$(document).ready(function(){
      $('.parallax').parallax();
    });


$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });


    $(document).ready(function() {
        $('input#input_text, textarea#textarea1').characterCounter();
      });



    });
