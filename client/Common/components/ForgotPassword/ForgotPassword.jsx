ForgotPassword = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    //Capture the users email
    const email = this.refs.email.value;

    if (email == "" || email == null) {
      Bert.alert("Please enter your email", "danger");
    } else {
      //Send email to user with link to reset password
      Accounts.forgotPassword({
        email: email
      }, (error) => {
        if (error) {
          Bert.alert("Invalid Email!", 'danger');
        } else {
          Bert.alert("Email has been sent", 'success');
          FlowRouter.go("/login");
        }
      });
    }
  },

  render() {
    const styles = {
      buttonStyle: {
        width: "100%"
      }
    };

    return (
      <div className="row">
      <div className="col s12 m6 offset-m3 l6 offset-l3" id="passwordForgotForm">
        <div className="card-panel grey lighten-4 z-depth-2">
          <h2 className="blue-text center">FORGOT PASSWORD</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12 m12 l12">
                <input type="email" ref="email" className="validate" minLength={2} placeholder="Email Address" required />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                <button className="btn blue white-text waves-effect" style={styles.buttonStyle}>Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
});