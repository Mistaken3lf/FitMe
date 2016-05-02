import React from 'react';
import Alert from 'react-s-alert';
import '/node_modules/sweetalert/dist/sweetalert.min.js';
import '/node_modules/sweetalert/dist/sweetalert.css';

FreePlan = React.createClass({
  freePlan() {
    const currentTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    //Check if the trainer is already in a paid plan and let
    //them know they are already in a plan
    if (currentTrainer.hasPaid == true) {
      //Needed for sweet alerts
      let previousWindowKeyDown = window.onkeydown;

      //Sweet alert to confirm deletion of client
      swal({
        title: "Are You Sure?",
        text: "You are currently enrolled in a plan. By switching back to a Free plan, you will lose all your current clients and your client limit will be set back to 1.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: true
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if (isConfirm) {
          Meteor.call("freeAccountTrainer");
          Alert.success("Thank you for choosing FitMe", {
            position: 'top-right',
            effect: 'jelly'
          });
        } else {
          swal('Cancelled', 'Your account will not be reset.', 'error');
        }
      });
    } else {
      //Needed for sweet alerts
      let previousWindowKeyDown = window.onkeydown;

      //Sweet alert to confirm deletion of client
      swal({
        title: "Reset Your Account To Free?",
        text: "You will lose all your current clients and your client limit will be dropped to 1",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, continue!",
        closeOnConfirm: true
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if (isConfirm) {
          Meteor.call("freeAccountTrainer");
          Alert.success("Thank you for choosing FitMe", {
            position: 'top-right',
            effect: 'jelly'
          });
        } else {
          swal('Cancelled', 'Your account will not be reset.', 'error');
        }
      });
    }
  },

  render() {
    if (this.props.userStatus.userStatus == "suspended") {
      return (
        <div className="col s12 m3 l3">
          <div className="card white hoverable darken-1 z-depth-1">
            <div className="center-align card-content blue-text">
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">Free</h5>
              </div>
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">$0.00</h5>
                <p className="center-align">1 Client Limit</p>
              </div>
              <br />
              <br />
              <div className="divider"></div>
              <br />
              <a className="btn-floating btn-medium waves-effect waves-light blue center-align" onClick={this.freePlan}><i className="material-icons white-text">add</i></a>
            </div>
          </div>
        </div>
      );
    } else if (this.props.userStatus.hasPaid == true) {
      return (
        <div className="col s12 m3 l3">
          <div className="card white hoverable darken-1 z-depth-1">
            <div className="center-align card-content blue-text">
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">Free</h5>
              </div>
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">$0.00</h5>
                <p className="center-align">1 Client Limit</p>
              </div>
              <br />
              <br />
              <div className="divider"></div>
              <br />
              <a className="btn-floating btn-medium waves-effect waves-light blue center-align disabled"><i className="material-icons white-text">add</i></a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col s12 m3 l3">
          <div className="card white hoverable darken-1 z-depth-1">
            <div className="center-align card-content blue-text">
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">Free</h5>
              </div>
              <div className="divider"></div>
              <div className="section">
                <h5 className="center-align">$0.00</h5>
                <p className="center-align">1 Client Limit</p>
              </div>
              <br />
              <br />
              <div className="divider"></div>
              <br />
              <a className="btn-floating btn-medium waves-effect waves-light blue center-align disabled"><i className="material-icons white-text">add</i></a>
            </div>
          </div>
        </div>
      );
    }
  }
});