import React from 'react';
import Alert from 'react-s-alert';
import '/node_modules/sweetalert/dist/sweetalert.min.js';
import '/node_modules/sweetalert/dist/sweetalert.css';

ClientTable = React.createClass({
  clientDashboard(id) {
    const thisTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    }, {
      fields: {
        userStatus: 1
      }
    });

    //Dont let user click on a client if they are suspended
    if (thisTrainer.userStatus == "suspended") {
      Alert.error("Sorry, your account has been suspended", {
        position: 'top-right',
        effect: 'jelly'
      });
    } else {
      FlowRouter.go("/clientDashboard/" + id);
    }
  },

  deleteClient(id) {
    //Find client to delete
    const curUser = Meteor.users.findOne({
      _id: id
    });

    //Check if the user is suspended
    if (curUser.userStatus == "suspended") {
      Alert.error("Sorry, your account has been suspended", {
        position: 'top-right',
        effect: 'jelly'
      });
      return;
    }

    //Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    //Sweet alert to confirm deletion of client
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover" + " " + curUser.username,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, remove user",
      closeOnConfirm: false
    }, (isConfirm) => {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Deleted!', 'Client has been deleted', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("deleteClient", {
          id
        }, (error, result) => {
          if (error) {
            Alert.error("Sorry, your account has been suspended", {
              position: 'top-right',
              effect: 'jelly'
            });
          }
        });
      } else {
        swal('Cancelled', 'Your client is safe now', 'error');
      }
    });
  },

  suspendClient(id) {
    //Suspend client clicked on
    Meteor.call("suspendClient", {
      id
    }, (error, result) => {
      if (error) {
        Alert.error("Sorry, your account has been suspended", {
          position: 'top-right',
          effect: 'jelly'
        });
      }
    });
  },

  render() {
    return (
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Suspend</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {this.props.trainersClients.map((client) => {
          return (
            <tr key={client._id}>
              <td><a href="#!" onClick={this.clientDashboard.bind(null, client._id)}>{client.username}</a></td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.userStatus}</td>
              <td><button className="btn-floating amber waves-effect" onClick={this.suspendClient.bind(null, client._id)}><i className="material-icons">https</i></button></td>
              <td><button className="btn-floating red waves-effect" onClick={this.deleteClient.bind(null, client._id)}><i className="material-icons">remove</i></button></td>
            </tr>
          );
          })}
        </tbody>
      </table>
    );
  }
});