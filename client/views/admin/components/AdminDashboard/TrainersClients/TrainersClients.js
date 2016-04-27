import React from 'react';
import AdminClientTable from './AdminClientTable.js';

export default class TrainersClients extends React.Component {
  render() {
    return (
      <div className="card white">
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="black card-title center-align white-text">CURRENT CLIENTS</div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="row">
                  <div className="col s12 m12 l12">
                    <AdminClientTable trainersClients={this.props.trainersClients} />
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