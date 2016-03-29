import React from 'react';

ContactPage = React.createClass({
  render() {
    return (
      <div>
        <h3 className="blue-text center">Contact Us</h3>
        <hr className="guideSeperator" />
        <br />
        <br />
        <div className="row">
          <div className="col s12 m12 l12">
            <h5 className="extraPadding">To reach the FitMe team, please use one of the appropriate emails below.</h5>
            <br />
            <br />
            <h5 className="extraPadding">
              <b>General questions, feedback, enhancement suggestions: </b>info@gofitme.com
              <br /><br />
              <b>Technical Issues: </b>support@gofitme.com
              <br /><br />
              <b>Sales & Account Information: </b>sales@gofitme.com
              <br /><br />
              <b>Social Media & Public Relations: </b>social@gofitme.com
              <br /><br />
            </h5>
          </div>
        </div>
      </div>
    );
  }
});