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
      }),

      clientCount: Meteor.users.find({
        createdBy: trainerId
      }).count()
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

  render() {
    if (this.data.loading) {
      return (
        <Loading />
      );
    } else if (Meteor.loggingIn()) {
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
                            <td>{this.data.clientCount}</td>
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
                  <PlanButtons />
                  <br /><br />
                  <ExtrasButtons />
                  <br /><br />
                  <DangerZone />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
});