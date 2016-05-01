import React from 'react';

const UserCounter = ({totalTrainers, totalClients, totalUsers}) => (
  <div className="row">
    <div className="col s12 m4 l4">
      <h5 className="green-text center-align">TOTAL TRAINERS: {totalTrainers}</h5>
    </div>
    <div className="col s12 m4 l4">
      <h5 className="green-text center-align">TOTAL CLIENTS: {totalClients}</h5>
    </div>
    <div className="col s12 m4 l4">
      <h5 className="green-text center-align">TOTAL USERS: {totalUsers}</h5>
    </div>
  </div>
);

export default UserCounter;
