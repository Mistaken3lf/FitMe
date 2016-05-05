import React from 'react';
import Alert from 'react-s-alert';
import {FlowRouter} from 'meteor/kadira:flow-router';
import '/node_modules/sweetalert/dist/sweetalert.min.js';
import '/node_modules/sweetalert/dist/sweetalert.css';

function deleteTrainersAccount() {
  const trainerId = FlowRouter.getParam('_id');

  // Needed for sweet alerts
  let previousWindowKeyDown = window.onkeydown;

  // Sweet alert to confirm deletion of client
  swal({
    title: 'Are you sure?',
    text: 'All Clients WILL Be Deleted!!!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DD6B55',
    confirmButtonText: 'Yes, reset account!',
    closeOnConfirm: false,
  }, (isConfirm) => {
    window.onkeydown = previousWindowKeyDown;
    if (isConfirm) {
      swal('Reset!', 'Account has been reset.', 'success');
      // Call server function to delete the client clicked on
      Meteor.call('resetAccount', {
        trainerId,
      });

      Alert.success('Account has been reset', {
        position: 'top-right',
        effect: 'jelly',
      });

    } else {
      swal('Cancelled', 'Account is safe now :)', 'error');
    }
  });
}

const DangerZone = () => (
  <div>
    <h3 className="center red-text">DANGER ZONE!!!</h3>
    <div className="row center">
      <div className="col s12 m4 offset-m4 l4 offset-l4">
        <button className="btn red waves-effect" onClick={deleteTrainersAccount}>DELETE ACCOUNT</button>
      </div>
    </div>
  </div>
);

export default DangerZone;