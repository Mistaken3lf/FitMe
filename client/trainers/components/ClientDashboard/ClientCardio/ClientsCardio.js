import React from 'react';
import Loading from '../../../../common/components/Loading/Loading.js';
import NotAuthorized from '../../../../common/components/NotAuthorized/NotAuthorized.js';

ClientsCardio = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const clientId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("currentClientsCardio", clientId);

    const currentClientsCardio = ClientCardio.findOne({
      whosCardio: clientId
    })

    return {
      loading: !handle.ready(),

      currentClientsCardio: currentClientsCardio || {}
    }
  },

  render() {
    if(this.data.loading) {
      return (
        <Loading />
      );
    } else if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <div className="card grey lighten-4">
        <div className="col s12 m12 l12">
          <div className="card z-depth-1">
            <div className="blue card-title center-align white-text">CARDIO CARD</div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <CardioProgramHeader cardioData={this.data.currentClientsCardio} />
            <Week1To4Cardio cardioData={this.data.currentClientsCardio} />
            <Week5To8Cardio cardioData={this.data.currentClientsCardio} />
            <Week9To12Cardio cardioData={this.data.currentClientsCardio} />
          </div>
        </div>
      </div>
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
});