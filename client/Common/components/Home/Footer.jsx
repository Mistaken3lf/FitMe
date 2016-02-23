Footer = React.createClass({
  render() {
    return (
      <footer className="page-footer" id="footerColor">
        <div className="container">
          <div className="row center">
            <div className="col s12 m6 offset-m3 l6 offset-l3 center">
              <ul>
                <li>
                  <a href="https://www.instagram.com/go_fitme/" target="_blank"><img className="responsive-img icon-IG" src="/home/ig.png" /></a>
                  <a href="https://www.facebook.com/gofitme/?fref=ts" target="_blank"><img className="responsive-img icon-IG" src="/home/fb.png" /></a>
                  <a href="https://twitter.com/go_fitme" target="_blank"><img className="responsive-img icon-IG" src="/home/tw.png" /></a>
                </li>
              </ul>
              <span><a href="/termsAndConditions" className="white-text">Terms And Conditions</a> | <a href="contactPage" className="white-text">Contact Us</a></span>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 offset-m3 l6 offset-l3">
              <p className="grey-text text-lighten-4 center-align"> &lt;div&gt;elop provides the FitMe Web App as a service to the public and users of the application.</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright grey">
          <div className="container">
            ©2016
            <img className="responsive-img footer-logo" src="/Home/FitMe-text-logo3.png" /> All rights reserved.
            <a className="white-text text-accent-2 right" href="http://www.divelop.io"><b>&lt;div&gt;elop LLC</b></a>
          </div>
        </div>
      </footer>
    );
  }
});