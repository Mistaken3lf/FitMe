import React from 'react';

Refunds = React.createClass({
  render() {
    return (
      <div>
        <h6 className="extraPadding"><b>13.) REFUNDS</b></h6>
        <h6 className="extraPaddingTerms">
          <b>Refunds for annual and six-month packages:</b>
          Anyone subscribing to an annual or six-month package will have their
          credit cards charged the full amount for the service
          when they sign up. Should cancellation be requested within
          thirty (30) days of the sign up date, your credit card will be
          refunded 100% of the annual or six-month fee charged for the package.
          Should cancellation be requested after day 30 of signing up,
          no refunds will be issued on payments made.
          <br />
          <br />
          <b>Refunds for monthly package:</b> Any user subscribing to our
          services on a monthly basis will have their credit card charged
          the full monthly amount for the service in which they sign up.
          Should cancellation be requested within forty eight (48) hours
          of the sign up date, your credit card will be refunded 100% of the
          monthly fee charged for the package.
          Should cancellation be requested after forty eight
          (48) hours of signing up, no refunds will be issued on payments made.
        </h6>
      </div>
    );
  }
});