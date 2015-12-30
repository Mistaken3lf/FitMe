Template.home.onRendered(() => {
  //Initialization for the update slider
  $('.slider').slider({
    full_width: true
  });

  $('.parallax').parallax();
});

Template.home.events({
  "click .learnMore" (event) {
    swal({
      title: "Free Account!",
      text: "A free account will allow you to have one week of full access to FitMe with a limit of one client .",
      imageUrl: "navigation/fitMeSidebarLogo.png"
    });
  }
});