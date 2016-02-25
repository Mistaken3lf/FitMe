ScheduleInfo = React.createClass({
  todaysDate() {
    return moment().format("ddd. MMM Do");
  },

  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');
    console.log(fieldName);

    Meteor.call("updateClientsSchedule", {
      fieldName, data, clientId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, "danger");
      }
    });
  },

  render() {
    return (
      <div className="col s12 m12 l12">
        <div className="card white z-depth-1">
          <div className="row">
            <div className="col s12 m4 l4">
              <h6 className="center-align blue-text"><b>Sessions Remaining</b></h6>
              <input type="number" ref="sessionsRemaining" name="sessionsRemaining" className="center-align" value={this.props.scheduleData.sessionsRemaining} onChange={this.updateField} placeholder="Ex. 20" />
            </div>
            <div className="col s12 m4 l4">
              <h6 className="center-align blue-text"><b>Payment Due</b></h6>
              <input type="date" ref="paymentDue" className="center-align" name="paymentDue" value={this.props.scheduleData.paymentDue} onChange={this.updateField} placeholder="Ex. 05/29/1990" />
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