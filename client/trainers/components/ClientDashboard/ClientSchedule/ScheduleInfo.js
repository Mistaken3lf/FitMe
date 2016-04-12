import React from 'react';

ScheduleInfo = React.createClass({
  todaysDate() {
    return moment().format("ddd. MMM Do");
  },

  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call("updateClientsSchedule", {
      fieldName, data, clientId
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
    });
  },

  render() {
    return (
      <div className="col s12 m12 l12">
        <div className="card white z-depth-1">
          <div className="row">
            <div className="col s12 m4 l4 center-align">
              <h6 className="blue-text"><b>Sessions Remaining</b></h6>
              <input type="number" ref="sessionsRemaining" className="center-align" name="sessionsRemaining" defaultValue={this.props.scheduleData.sessionsRemaining} onChange={this.updateField} placeholder="Ex. 20" />
            </div>
            <div className="col s12 m4 l4 center-align">
              <h6 className="blue-text"><b>Payment Due</b></h6>
              <input type="date" ref="paymentDue" className="center-align" name="paymentDue" defaultValue={this.props.scheduleData.paymentDue} onChange={this.updateField} placeholder="Ex. 05/29/1990" />
            </div>
            <div className="col s12 m4 l4 center-align">
              <h6 className="blue-text center-align"><b>Today's Date</b></h6>
              <br />
              <span>{this.todaysDate()}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});