import React from 'react';

function addFiveAddidionalClients() {
  const trainerId = FlowRouter.getParam('_id');
  Meteor.call("fiveAdditionalClients", {
    trainerId
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert("5 Additional Clients Added", 'success');
    }
  });
}

function addTenAddidionalClients() {
  const trainerId = FlowRouter.getParam('_id');
  Meteor.call("tenAdditionalClients", {
    trainerId
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert("10 Additional Clients Added", 'success');
    }
  });
}

function addTwentyAddidionalClients() {
  const trainerId = FlowRouter.getParam('_id');
  Meteor.call("twentyAdditionalClients", {
    trainerId
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert("20 Additional Clients Added", 'success');
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