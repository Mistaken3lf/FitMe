import React from 'react';
import Alert from 'react-s-alert';
import PlanButtons from './PlanButtons.js';
import ExtrasButtons from './ExtrasButtons.js';
import DangerZone from './DangerZone.js';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';

TrainersAccount.propTypes = {
  accountDetails: React.PropTypes.object.isRequired,
  clientCount: React.propTypes.number.isRequired,
};

export default class TrainersAccount extends React.Component {
  sendWarningEmail() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call('sendInactiveEmail', {
      trainerId,
    }, (error) => {
      if (error) {
        Alert.error(error.reason);
      } else {
        Alert.success('Warning email sent', {
          position: 'top-right',
          effect: 'jelly',
        });
      }
    });
  }

  render() {
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
                          <td>{this.props.accountDetails.planType}</td>
                          <td>{this.props.accountDetails.datePurchased}</td>
                          <td>{this.props.accountDetails.expiresOn}</td>
                          <td>{this.props.clientCount}</td>
                          <td>{this.props.accountDetails.clientLimit}</td>
                          <td>{this.props.accountDetails.lastLogin}</td>
                          <td>
                            <button className="btn-floating red waves-effect" onClick={this.sendWarningEmail}>
                              <i className="material-icons">error_outline</i>
                            </button>
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
