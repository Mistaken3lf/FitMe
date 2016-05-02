import React from 'react';
import Alert from 'react-s-alert';
import '/node_modules/sweetalert/dist/sweetalert.min.js';
import '/node_modules/sweetalert/dist/sweetalert.css';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default class DeletedTrainers extends React.Component {
  suspendTrainer(id) {
    //Suspend the trainer clicked on
    Meteor.call("suspendTrainer", {
      id
    });
  }

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
        Meteor.call("removeTrainer", {
          id
        });
      } else {
        swal('Cancelled', 'Your user is safe now.', 'error');
      }
    });
  }

  paymentWarning(id, expiresOn) {
    Meteor.call("paymentDueSoon", {
      expiresOn, id
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly'
        });
      } else {
        Alert.success('Payment warning sent', {
          position: 'top-right',
          effect: 'jelly'
        });
      }
    });
  }

  trainersDashboard(id) {
    FlowRouter.go("/adminDashboard/" + id);
  }

  render() {
    return (
      <div>
        <div className="col s12 m12 l12">
          <div className="card">
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="card z-depth-1">
                  <div className="card-title center-align white-text allTrainersHeader">DELETED TRAINERS</div>
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
                    {this.props.deletedTrainers.map((deletedTrainers) => {
                    return (
                      <tr key={deletedTrainers._id}>
                        <td><a href="#" onClick={this.trainersDashboard.bind(this, deletedTrainers._id)}>{deletedTrainers.username}</a></td>
                        <td>{deletedTrainers.firstName}</td>
                        <td>{deletedTrainers.lastName}</td>
                        <td>{deletedTrainers.userStatus}</td>
                        <td>{deletedTrainers.planType}</td>
                        <td>{deletedTrainers.expiresOn}</td>
                        <td><button className="btn-floating amber waves-effect" onClick={this.suspendTrainer.bind(this, deletedTrainers._id)}><i className="material-icons">https</i></button></td>
                        <td><button className="btn-floating red waves-effect" onClick={this.deleteTrainer.bind(this, deletedTrainers._id)}><i className="material-icons">remove</i></button></td>
                        <td><button className="btn-floating green waves-effect" onClick={this.paymentWarning.bind(this, deletedTrainers._id, deletedTrainers.expiresOn)}><i className="material-icons">assignment_late</i></button></td>
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
}