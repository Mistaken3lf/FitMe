import React from 'react';
import '/node_modules/sweetalert/dist/sweetalert.min.js';
import '/node_modules/sweetalert/dist/sweetalert.css';

export default class ClientTable extends React.Component {
  suspendClient(id) {
    //Suspend user clicked on
    Meteor.call("suspendClientAdmin", {
      id
    });
  }

  deleteClient(id) {
    //Find client clicked on
    const curUser = Meteor.users.findOne({
      _id: id
    });

    //Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    //Popup sweet alert to confirm delete
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
        swal('Deleted!', 'Client has been deleted.', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("removeClient", {
          id
        });
      } else {
        swal('Cancelled', 'Your client is safe now :)', 'error');
      }
    });
  }

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
              <td>{client.username}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.userStatus}</td>
              <td>
                <button className="btn-floating amber waves-effect" onClick={this.suspendClient.bind(this, client._id)}><i className="material-icons">https</i></button>
              </td>
              <td>
                <button className="btn-floating red waves-effect" onClick={this.deleteClient.bind(this, client._id)}><i className="material-icons">remove</i></button>
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}