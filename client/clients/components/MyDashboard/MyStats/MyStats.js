import React from 'react';
import MyHeartRateChart from './MyHeartRateChart.js';
import MyBodyFatChart from './MyBodyFatChart.js';

MyStats = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("myStats");

    const myStats = ClientStats.findOne({
      whosStats: Meteor.userId()
    });

    return {
      loading: !handle.ready(),

      currentClient: Meteor.users.findOne({
        _id: Meteor.userId()
      }),

      myStats: myStats || {}
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
    } else if (Roles.userIsInRole(Meteor.userId(), "client")) {
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
                      <MyStatsInitialTest statsData={this.data.myStats} />
                      <MyStatsRTOne statsData={this.data.myStats} />
                      <MyStatsRTTwo statsData={this.data.myStats} />
                      <MyStatsRTThree statsData={this.data.myStats} />
                      <MyStatsChange statsData={this.data.myStats} />
                    </div>
                  </div>
                </div>
                <span className="card-title black-text">{this.data.currentClient.lastName}'s Measurements</span>
                <div className="card white z-depth-1 spacing">
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <MyMeasureInitialTest statsData={this.data.myStats} />
                      <MyMeasureRTOne statsData={this.data.myStats} />
                      <MyMeasureRTTwo statsData={this.data.myStats} />
                      <MyMeasureRTThree statsData={this.data.myStats} />
                      <MyMeasureChange statsData={this.data.myStats} />
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