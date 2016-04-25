import React from 'react';
import moment from 'moment';

function todaysDate() {
  return moment().format("ddd. MMM Do");
}

const MyScheduleInfo = ({scheduleData}) => (
  <div className="col s12 m12 l12">
    <div className="card white z-depth-1">
      <div className="row">
        <div className="col s12 m4 l4">
          <h6 className="center-align blue-text"><b>Sessions Remaining</b></h6>
          <h6 className="center">{scheduleData.sessionsRemaining}</h6>
        </div>
        <div className="col s12 m4 l4">
          <h6 className="center-align blue-text"><b>Payment Due</b></h6>
          <h6 className="center">{scheduleData.paymentDue}</h6>
        </div>
        <div className="col s12 m4 l4 center">
          <h6 className="center blue-text"><b>Today's Date</b></h6>
          <span>{todaysDate()}</span>
        </div>
      </div>
    </div>
  </div>
);

export default MyScheduleInfo;