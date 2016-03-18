PlanButtons = React.createClass({
  activateMonthlyPlan() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call("monthlyPlan", {
      trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert("Monthly Plan Started", 'success');
      }
    });
  },

  activateSixMonthPlan() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call("sixMonthPlan", {
      trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert("Six Month Plan Started", 'success');
      }
    });
  },

  activateYearlyPlan() {
    const trainerId = FlowRouter.getParam('_id');
    Meteor.call("yearlyPlan", {
      trainerId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert("Yearly Plan Started", 'success');
      }
    });
  },

  render() {
    return (
      <div>
        <h3 className="center">PLANS</h3>
        <div className="row center">
          <div className="col s12 m4 l4">
            <button className="btn green waves-effect" onClick={this.activateMonthlyPlan}>Monthly Plan</button>
          </div>
          <div className="col s12 m4 l4">
            <button className="btn green waves-effect" onClick={this.activateSixMonthPlan}>Six Month Plan</button>
          </div>
          <div className="col s12 m4 l4">
            <button className="btn green waves-effect" onClick={this.activateYearlyPlan}>Yearly Plan</button>
          </div>
        </div>
      </div>
    );
  }
});