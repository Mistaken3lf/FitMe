import React from 'react';
import Alert from 'react-s-alert';
import {FlowRouter} from 'meteor/kadira:flow-router';

function addFiveAddidionalClients() {
  const trainerId = FlowRouter.getParam('_id');
  Meteor.call("fiveAdditionalClients", {
    trainerId
  }, (error) => {
    if (error) {
      Alert.error(error.reason, {
        position: 'top-right',
        effect: 'jelly'
      });
    } else {
      Alert.success("5 additional clients added", {
        position: 'top-right',
        effect: 'jelly'
      });
    }
  });
}

function addTenAddidionalClients() {
  const trainerId = FlowRouter.getParam('_id');
  Meteor.call("tenAdditionalClients", {
    trainerId
  }, (error) => {
    if (error) {
      Alert.error(error.reason, {
        position: 'top-right',
        effect: 'jelly'
      });
    } else {
      Alert.success("10 additional clients added", {
        position: 'top-right',
        effect: 'jelly'
      });
    }
  });
}

function addTwentyAddidionalClients() {
  const trainerId = FlowRouter.getParam('_id');
  Meteor.call("twentyAdditionalClients", {
    trainerId
  }, (error) => {
    if (error) {
      Alert.error(error.reason, {
        position: 'top-right',
        effect: 'jelly'
      });
    } else {
      Alert.success("20 additional clients added", {
        position: 'top-right',
        effect: 'jelly'
      });
    }
  });
}


const ExtrasButtons = () => (
  <div>
    <h3 className="center">EXTRAS</h3>
    <div className="row center">
      <div className="col s12 m4 l4">
        <button className="btn green waves-effect" onClick={addFiveAddidionalClients}>5 Additional Clients</button>
      </div>
      <div className="col s12 m4 l4">
        <button className="btn green waves-effect" onClick={addTenAddidionalClients}>10 Additional Clients</button>
      </div>
      <div className="col s12 m4 l4">
        <button className="btn green waves-effect" onClick={addTwentyAddidionalClients}>20 Additional Clients</button>
      </div>
    </div>
  </div>
);

export default ExtrasButtons;