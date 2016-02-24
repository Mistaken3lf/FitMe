AccountDetails = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const trainerId = FlowRouter.getParam('_id');
    const trainersAccount = Meteor.subscribe("trainersAccount", trainerId);
    const trainersClients = Meteor.subscribe("trainersClients", trainerId);

    return {
      loading: !trainersAccount.ready() || !trainersClients.ready(),

      trainersAccount: Meteor.users.findOne({
        _id: trainerId
      })
    };
  },

  sendWarningEmail() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call("sendInactiveEmail", {
      trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert("Warning Email Sent", 'success');
      }
    });
  },

  activateMonthlyPlan() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call("monthlyPlan", {
      trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        console.log("Test");
        Bert.alert("Monthly Plan Started", 'success');
      }
    });
  },

  activateSixMonthPlan() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call("sixMonthPlan", {
      trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert("Six Month Plan Started", 'success');
      }
    });
  },

  activateYearlyPlan() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call("yearlyPlan", {
      trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert("Yearly Plan Started", 'success');
      }
    });
  },

  addFiveAddidionalClients() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call("fiveAdditionalClients", {
      trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert("5 Additional Clients Added", 'success');
      }
    });
  },

  addTenAddidionalClients() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call("tenAdditionalClients", {
      trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert("10 Additional Clients Added", 'success');
      }
    });
  },

  addTwentyAddidionalClients() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call("twentyAdditionalClients", {
      trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert("20 Additional Clients Added", 'success');
      }
    });
  },

  deleteTrainersAccount() {
    const trainerId = FlowRouter.getParam('_id');

    //Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Are you sure?",
      text: "All Clients WILL Be Deleted!!!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, reset account!",
      closeOnConfirm: false
    }, (isConfirm) => {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Reset!', 'Account has been reset.', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("resetAccount", {
          trainerId
        });
        Bert.alert("Account has been reset", "success");
      } else {
        swal('Cancelled', 'Account is safe now :)', 'error');
      }
    });
  },

  render() {
    if (this.data.loading) {
      return (
        <Loading />
      );
    } else {
      return (
        <div className="card white">
          <div className="row">
            <div className="col s12 m12 l12">
              <div className="card">
                <div className="black card-title center-align white-text">ACCOUNT SETTINGS</div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <table className="responsive-table">
                        <thead>
                          <tr>
                            <th>Plan Type</th>
                            <th>Date Purchased</th>
                            <th>Expires</th>
                            <th>Total Clients</th>
                            <th>Client Limit</th>
                            <th>Last Login</th>
                            <th>Email Inactive</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.data.trainersAccount.planType}</td>
                            <td>{this.data.trainersAccount.datePurchased}</td>
                            <td>{this.data.trainersAccount.expiresOn}</td>
                            <td>{this.data.trainersAccount.totalClients}</td>
                            <td>{this.data.trainersAccount.clientLimit}</td>
                            <td>{this.data.trainersAccount.lastLogin}</td>
                            <td>
                              <button className="btn-floating red waves-effect" onClick={this.sendWarningEmail}><i className="material-icons">error_outline</i></button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <br /><br />
                  <h3 className="center">PLANS</h3>
                  <div className="row center">
                    <div className="col s12 m4 l4">
                      <button className="btn green waves-effect" onClick={this.activateMonthlyPlan}>Monthly Plan</button>
                    </div>
                    <div className="col s12 m4 l4">
                      <button className="btn green waves-effect" onClick={this.activateSixMonthPlan}>Six Month Plan</button>
                    </div>
                    <div className="col s12 m4 l4">
                      <button className="btn green waves-effect" onClick={this.activateYearlyPlan}>Yearly Plan</button>
                    </div>
                  </div>
                  <br /><br />
                  <h3 className="center">EXTRAS</h3>
                  <div className="row center">
                    <div className="col s12 m4 l4">
                      <button className="btn green waves-effect" onClick={this.addFiveAddidionalClients}>5 Additional Clients</button>
                    </div>
                    <div className="col s12 m4 l4">
                      <button className="btn green waves-effect" onClick={this.addTenAddidionalClients}>10 Additional Clients</button>
                    </div>
                    <div className="col s12 m4 l4">
                      <button className="btn green waves-effect" onClick={this.addTwentyAddidionalClients}>20 Additional Clients</button>
                    </div>
                  </div>
                  <br /><br />
                  <h3 className="center red-text">DANGER ZONE!!!</h3>
                  <div className="row center">
                    <div className="col s12 m4 offset-m4 l4 offset-l4">
                      <button className="btn red waves-effect" onClick={this.deleteTrainersAccount}>DELETE ACCOUNT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
});