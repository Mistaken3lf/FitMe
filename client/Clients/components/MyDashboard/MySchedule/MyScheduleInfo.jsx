import React from 'react';

MyScheduleInfo = React.createClass({
  todaysDate() {
    return moment().format("ddd. MMM Do");
  },

  render() {
    return (
      <div className="col s12 m12 l12">
        <div className="card white z-depth-1">
          <div className="row">
            <div className="col s12 m4 l4">
              <h6 className="center-align blue-text"><b>Sessions Remaining</b></h6>
              <input type="number" ref="sessionsRemaining" name="sessionsRemaining" className="center-align" defaultValue={this.props.scheduleData.sessionsRemaining} placeholder="Ex. 20" readOnly />
            </div>
            <div className="col s12 m4 l4">
              <h6 className="center-align blue-text"><b>Payment Due</b></h6>
              <input type="date" ref="paymentDue" className="center-align" name="paymentDue" defaultValue={this.props.scheduleData.paymentDue} placeholder="Ex. 05/29/1990" readOnly />
            </div>
            <div className="col s12 m4 l4 center">
              <h6 className="center-align blue-text"><b>Today's Date</b></h6>
              <br />
              <span>{this.todaysDate()}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});