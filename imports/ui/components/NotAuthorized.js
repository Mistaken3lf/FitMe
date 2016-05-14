import React from 'react';

const NotAuthorized = () => (
  <div className="row">
    <div className="col s12 m8 offset-m2 l6 offset-l3" id="userLoginForm">
      <div className="card-panel red z-depth-2">
        <div className="row">
          <div className="col s12 center">
            <i className="white-text large material-icons">not_interested</i>
          </div>
        </div>
        <div className="row">
          <div className="col s12 center-align">
            <h5 className="white-text">You do not have access to this page. If you believe
              you should have access, please contact FitMe, or your trainer to see whats
              wrong, Thanks.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotAuthorized;
