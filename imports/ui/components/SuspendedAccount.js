import React from 'react';

const SuspendedAccount = () => (
  <div className="row">
    <div className="col s12 m8 offset-m2 l6 offset-l3" id="userLoginForm">
      <div className="card-panel indigo z-depth-2">
        <div className="row">
          <div className="col s12 center">
            <i className="white-text large material-icons">verified_user</i>
          </div>
        </div>
        <div className="row">
          <div className="col s12 center-align">
            <h5 className="white-text">Your account has been suspended. Please check that
              you have made a payment for one of the plans, or revert back to the free plan.
              If you believe there is problem with your account please feel free to contact
              FitMe, thanks.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SuspendedAccount;
