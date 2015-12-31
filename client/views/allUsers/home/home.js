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
      html: true,
      text: "Everyone signing up for FitMe will be able to a create free account which includes a free 7-day trial.  Users will also be able to \
          create one <b>FREE</b> client so they can test out FitMe.  After your free 7-day trial account expires, you can either cancel your account or proceed \
          in purchasing a paid plan.",
      imageUrl: "navigation/fitMeSidebarLogo.png"
    });
  }
});