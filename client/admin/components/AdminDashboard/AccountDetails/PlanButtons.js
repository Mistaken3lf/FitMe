import React from 'react';

function activateMonthlyPlan() {
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
}

function activateSixMonthPlan() {
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
}

function activateYearlyPlan() {
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
}

const PlanButtons = () => (
  <div>
    <h3 className="center">PLANS</h3>
    <div className="row center">
      <div className="col s12 m4 l4">
        <button className="btn green waves-effect" onClick={activateMonthlyPlan}>Monthly Plan</button>
      </div>
      <div className="col s12 m4 l4">
        <button className="btn green waves-effect" onClick={activateSixMonthPlan}>Six Month Plan</button>
      </div>
      <div className="col s12 m4 l4">
        <button className="btn green waves-effect" onClick={activateYearlyPlan}>Yearly Plan</button>
      </div>
    </div>
  </div>
);

export default PlanButtons;