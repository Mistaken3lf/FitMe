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
      text: "Here's a custom image.",
      imageUrl: "navigation/fitMeSidebarLogo.png"
    });
  }
});