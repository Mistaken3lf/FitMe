import React from 'react';

DangerZone = React.createClass({
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
    return (
      <div>
        <h3 className="center red-text">DANGER ZONE!!!</h3>
        <div className="row center">
          <div className="col s12 m4 offset-m4 l4 offset-l4">
            <button className="btn red waves-effect" onClick={this.deleteTrainersAccount}>DELETE ACCOUNT</button>
          </div>
        </div>
      </div>
    );
  }
});