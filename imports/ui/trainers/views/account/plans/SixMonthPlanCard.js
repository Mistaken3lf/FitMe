import React from 'react';
import Alert from 'react-s-alert';
import '/node_modules/sweetalert/dist/sweetalert.min.js';
import '/node_modules/sweetalert/dist/sweetalert.css';

SixMonthPlan = React.createClass({
  sixMonthPlan() {
    let planType = '';
    let dollarAmount = 0;

    const currentTrainer = Meteor.users.findOne({
      _id: Meteor.userId(),
    });

    // Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    // Sweet alert to confirm deletion of client
    swal({
      title: 'Terms and Conditions',
      text: 'You will be prompted for payment provided by Stripe. All payments are securely stored and handled through the Stripe website.  <br><br> By clicking Accept, you will agree to these <a href=\'/termsAndConditions\' target=\'_blank\'>Terms and Conditions</a> and will proceed to make your payment with FitMe.',
      type: 'warning',
      showCancelButton: true,
      html: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Accept',
      closeOnConfirm: true,
    }, (isConfirm) => {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        // Find the current trainer
        const currentTrainer = Meteor.users.findOne({
          _id: Meteor.userId(),
        });

        let email = currentTrainer.emails[0].address;

        // Charge the trainer with stripe
        let checkout = StripeCheckout.configure({
          key: Meteor.settings.public.stripe,
          image: 'https://www.gofitme.com/Navigation/fitMeSidebarLogo.png',
          locale: 'auto',
          token(token) {
            charge = {
              amount: token.amount || dollarAmount,
              currency: token.currenty || 'usd',
              source: token.id,
              description: planType,
              receipt_email: email,
            };

            // Process their payment
            Meteor.call('processPayment', {
              charge,
            }, (error, response) => {
              if (error) {
                Alert.error(error.reason, {
                  position: 'top-right',
                  effect: 'jelly',
                });
              } else {
                // Six month plan
                if (planType == 'Six Month') {
                  Alert.success('Thank you for choosing FitMe', {
                    position: 'top-right',
                    effect: 'jelly',
                  });
                  Meteor.call('sixMonthPlanTrainer');
                }
              }
            });
          },
          closed() {

          },
        });

        // Open checkout for the 6 month plan
        checkout.open({
          email: currentTrainer.emails[0].address,
          name: 'Six Month',
          description: 'Six Months Of Access',
          amount: 6000,
          bitcoin: true,
        });

        // Set the plan type and dollar amount for 6 month
        planType = 'Six Month';
        dollarAmount = 6000;

      } else {
        swal('Cancelled', 'You Will Not Be Charged.', 'error');
      }
    });
  },

  render() {
    if (this.props.userStatus.userStatus == 'suspended') {
      return (
        <div className="col s12 m3 l3">
          <div className="card white hoverable darken-1 z-depth-1">
            <div className="center-align card-content blue-text">
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">6 Month</h5>
              </div>
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">$60.00</h5>
                <p className="center-align">50 Client Limit</p>
                <p className="center-align">Technical Support</p>
                <p className="center-align">6 Months Of Premium Access</p>
              </div>
              <div className="divider"></div>
              <br />
              <a className="btn-floating btn-medium waves-effect waves-light white center-align" onClick={this.sixMonthPlan}><i className="material-icons blue-text">add</i></a>
            </div>
          </div>
        </div>
      );
    } else if (this.props.userStatus.hasPaid == true) {
      return (
        <div className="col s12 m3 l3">
          <div className="card white hoverable darken-1 z-depth-1">
            <div className="center-align card-content blue-text">
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">6 Month</h5>
              </div>
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">$60.00</h5>
                <p className="center-align">50 Client Limit</p>
                <p className="center-align">Technical Support</p>
                <p className="center-align">6 Months Of Premium Access</p>
              </div>
              <div className="divider"></div>
              <br />
              <a className="btn-floating btn-medium waves-effect waves-light white center-align disabled"><i className="material-icons blue-text">add</i></a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col s12 m3 l3">
          <div className="card white hoverable darken-1 z-depth-1">
            <div className="center-align card-content blue-text">
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">6 Month</h5>
              </div>
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">$60.00</h5>
                <p className="center-align">50 Client Limit</p>
                <p className="center-align">Technical Support</p>
                <p className="center-align">6 Months Of Premium Access</p>
              </div>
              <div className="divider"></div>
              <br />
              <a className="btn-floating btn-medium waves-effect waves-light white center-align" onClick={this.sixMonthPlan}><i className="material-icons blue-text">add</i></a>
            </div>
          </div>
        </div>
      );
    }
  },
});