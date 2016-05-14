import React from 'react';
import Alert from 'react-s-alert';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

function activateMonthlyPlan() {
  const trainerId = FlowRouter.getParam('_id');
  Meteor.call('monthlyPlan', {
    trainerId,
  }, (error) => {
    if (error) {
      Alert.error(error.reason, {
        position: 'top-right',
        effect: 'jelly',
      });
    } else {
      Alert.success('Monthly plan started', {
        position: 'top-right',
        effect: 'jelly',
      });
    }
  });
}

function activateSixMonthPlan() {
  const trainerId = FlowRouter.getParam('_id');
  Meteor.call('sixMonthPlan', {
    trainerId,
  }, (error) => {
    if (error) {
      Alert.error(error.reason, {
        position: 'top-right',
        effect: 'jelly',
      });
    } else {
      Alert.success('Six month plan started', {
        position: 'top-right',
        effect: 'jelly',
      });
    }
  });
}

function activateYearlyPlan() {
  const trainerId = FlowRouter.getParam('_id');
  Meteor.call('yearlyPlan', {
    trainerId,
  }, (error) => {
    if (error) {
      Alert.error(error.reason, {
        position: 'top-right',
        effect: 'jelly',
      });
    } else {
      Alert.success('Yearly plan started', {
        position: 'top-right',
        effect: 'jelly',
      });
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
