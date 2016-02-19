SuspendedTrainers = React.createClass({
  suspendTrainer(id) {
    //Suspend the trainer clicked on
    Meteor.call("suspendTrainer", id);
  },

  deleteTrainer(id) {
    const curUser = Meteor.users.findOne({
      _id: id
    });

    //Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm the deletion of the trainer
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover" + " " + curUser.username,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, remove user!",
      closeOnConfirm: false
    }, (isConfirm) => {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Deleted!', 'User has been deleted.', 'success');
        Meteor.call("removeTrainer", curUser._id);
      } else {
        swal('Cancelled', 'Your user is safe now.', 'error');
      }
    });
  },

  paymentWarning(id, expiresOn) {
    Meteor.call("paymentDueSoon", expiresOn, id, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        Bert.alert("Payment warning sent", 'success');
      }
    });
  },

  trainersDashboard(id) {
    FlowRouter.go("/adminDashboard/" + id);
  },

  render() {
     return (
      <div>
        <div className="col s12 m12 l12">
          <div className="card">
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="card z-depth-1">
                  <div className="card-title center-align white-text allTrainersHeader">SUSPENDED TRAINERS</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                <table className="responsive-table">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>User Status</th>
                      <th>Plan Type</th>
                      <th>Expires On</th>
                      <th>Suspend</th>
                      <th>Remove</th>
                      <th>Payment Warning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.suspendedTrainers.map((suspendedTrainer) => {
                    return (
                      <tr key={suspendedTrainer._id}>
                        <td><a href="#" onClick={this.trainersDashboard.bind(null, suspendedTrainer._id)}>{suspendedTrainer.username}</a></td>
                        <td>{suspendedTrainer.firstName}</td>
                        <td>{suspendedTrainer.lastName}</td>
                        <td>{suspendedTrainer.userStatus}</td>
                        <td>{suspendedTrainer.planType}</td>
                        <td>{suspendedTrainer.expiresOn}</td>
                        <td><button className="btn-floating amber waves-effect" onClick={this.suspendTrainer.bind(null, suspendedTrainer._id)}><i className="material-icons">https</i></button></td>
                        <td><button className="btn-floating red waves-effect" onClick={this.deleteTrainer.bind(null, suspendedTrainer._id)}><i className="material-icons">remove</i></button></td>
                        <td><button className="btn-floating green waves-effect" onClick={this.paymentWarning.bind(null, suspendedTrainer._id, suspendedTrainer.expiresOn)}><i className="material-icons">assignment_late</i></button></td>
                      </tr>
                    );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});