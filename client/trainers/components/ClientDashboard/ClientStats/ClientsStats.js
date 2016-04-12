import React from 'react';
import Loading from '../../../../common/components/Loading/Loading.js';
import NotAuthorized from '../../../../common/components/NotAuthorized/NotAuthorized.js';

ClientsStats = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const clientId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("currentClientsStats", clientId);

    const clientsStats = ClientStats.findOne({
      whosStats: clientId
    });

    return {
      loading: !handle.ready(),

      currentClient: Meteor.users.findOne({
        _id: clientId
      }),

      clientsStats: clientsStats || {}
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
        <div>
          <div className="card grey lighten-4">
            <div className="col s12 m12 l12">
              <div className="card z-depth-1">
                <div className="blue card-title center-align white-text">STATS CARD</div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                <span className="card-title black-text">{this.data.currentClient.firstName}'s Body Statistics</span>
                <div className="card white z-depth-1">
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <StatsInitialTest statsData={this.data.clientsStats} />
                      <StatsRTOne statsData={this.data.clientsStats} />
                      <StatsRTTwo statsData={this.data.clientsStats} />
                      <StatsRTThree statsData={this.data.clientsStats} />
                      <StatsChange statsData={this.data.clientsStats} />
                    </div>
                  </div>
                </div>
                <span className="card-title black-text">{this.data.currentClient.firstName}'s Measurements</span>
                <div className="card white z-depth-1 spacing">
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <MeasureInitialTest statsData={this.data.clientsStats} />
                      <MeasureRTOne statsData={this.data.clientsStats} />
                      <MeasureRTTwo statsData={this.data.clientsStats} />
                      <MeasureRTThree statsData={this.data.clientsStats} />
                      <MeasureChange statsData={this.data.clientsStats} />
                    </div>
                  </div>
                </div>
              </div>
              <BodyFatChart />
              <HeartRateChart />
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