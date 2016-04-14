import React from 'react';

function learnMore() {
  swal({
    title: "Free Account!",
    html: true,
    text: "Everyone signing up for FitMe will be able to a create free account which includes a free 7-day trial.  Users will also be able to \
          create one <b>FREE</b> client so they can test out FitMe.  After your free 7-day trial account expires, you can either cancel your account or proceed \
          in purchasing a paid plan.",
    imageUrl: "navigation/fitMeSidebarLogo.png"
  });
}

const Header = () => (
  <section id="parallax-top">
    <div id="hero">
      <div className="col l6 s12 center-align">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <img className="responsive-img logo-img" src="/Home/FitMe-text-logo3.png" />
    </div>
    <div className="row center-align">
      <h5 className="header col s12 light white-text">TRAINING | DEDICATION | RESULTS</h5>
      <br />
      <br />
      <br />
      <h5 className="header col s12 light white-text">Sign up for FREE today! The first client is on us.</h5>
      <br />
      <br />
      <br />
      <button className="waves-effect waves-light btn blue center" onClick={this.learnMore}>Learn More</button>
    </div>
    </div>
  </section>
);

export default Header;