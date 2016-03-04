AddFiveClients = React.createClass({
  addFiveClients() {
    let planType = "";
    let dollarAmount = 0;

    const currentTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    //Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Terms and Conditions",
      text: "You will be prompted for payment provided by Stripe. All payments are securely stored and handled through the Stripe website.  By clicking Accept, you will agree to these <a href='/termsAndConditions' target='_blank'>Terms and Conditions</a> and will proceed to make your payment with FitMe.",
      type: "warning",
      html: true,
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Accept",
      closeOnConfirm: true
    }, (isConfirm) => {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        //Find the current trainer
        const currentTrainer = Meteor.users.findOne({
          _id: Meteor.userId()
        });

        let email = currentTrainer.emails[0].address;

        //Charge the trainer with stripe
        let checkout = StripeCheckout.configure({
          key: Meteor.settings.public.stripe,
          image: "https://www.gofitme.com/Navigation/fitMeSidebarLogo.png",
          locale: 'auto',
          token(token) {
            charge = {
              amount: token.amount || dollarAmount,
              currency: token.currenty || 'usd',
              source: token.id,
              description: planType,
              receipt_email: email
            };

            //Process their payment
            Meteor.call('processPayment', {charge}, (error, response) => {
              if (error) {
                Bert.alert(error.reason, 'danger');
              } else {
                if (planType == "Five Additional Clients") {
                  Bert.alert("Thank You For Choosing FitMe", "success");
                  Meteor.call("fiveAdditionalClientsTrainer");
                }
              }
            });
          },
          closed() {

          }
        });

        //Open checkout for 5 additional clients
        checkout.open({
          email: currentTrainer.emails[0].address,
          name: '5 Additional Clients',
          description: "Add five additional clients to your client limit",
          amount: 200,
          bitcoin: true
        });

        //Set the plan type and dollar amount for 5 clients
        planType = "Five Additional Clients";
        dollarAmount = 200;

      } else {
        swal('Cancelled', 'You Will Not Be Charged.', 'error');
      }
    });
  },

  render() {
    if(this.props.userStatus.userStatus == "suspended") {
      return (
        <div className="col s12 m4 l4">
          <div className="card blue hoverable darken-1 z-depth-1">
            <div className="center-align card-content white-text">
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">5 Additional Clients</h5>
              </div>
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">$2.00</h5>
                <p className="center-align">Add five additional clients to your client limit</p>
              </div>
              <div className="divider"></div>
              <br />
              <a className="btn-floating btn-medium waves-effect waves-light white center-align disabled"><i className="material-icons blue-text">add</i></a>
            </div>
          </div>
        </div>
      );
    } else if(this.props.userStatus.hasPaid == true) {
        return (
          <div className="col s12 m4 l4">
            <div className="card blue hoverable darken-1 z-depth-1">
              <div className="center-align card-content white-text">
                <div className="divider"></div>
                <div className="section">
                  <h5 className="center-align">5 Additional Clients</h5>
                </div>
                <div className="divider"></div>
                <div className="section">
                  <h5 className="center-align">$2.00</h5>
                  <p className="center-align">Add five additional clients to your client limit</p>
                </div>
                <div className="divider"></div>
                <br />
                <a className="btn-floating btn-medium waves-effect waves-light white center-align" onClick={this.addFiveClients}><i className="material-icons blue-text">add</i></a>
              </div>
            </div>
          </div>
        );
    } else {
      return (
        <div className="col s12 m4 l4">
          <div className="card blue hoverable darken-1 z-depth-1">
            <div className="center-align card-content white-text">
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">5 Additional Clients</h5>
              </div>
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">$2.00</h5>
                <p className="center-align">Add five additional clients to your client limit</p>
              </div>
              <div className="divider"></div>
              <br />
              <a className="btn-floating btn-medium waves-effect waves-light white center-align disabled"><i className="material-icons blue-text">add</i></a>
            </div>
          </div>
        </div>
      );
    }
  }
});