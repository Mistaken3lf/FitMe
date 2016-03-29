import React from 'react';

MyCardio = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("myCardio");

    const myCardio = ClientCardio.findOne({
      whosCardio: Meteor.userId()
    })

    return {
      loading: !handle.ready(),

      myCardio: myCardio || {}
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
        <div className="card grey lighten-4">
        <div className="col s12 m12 l12">
          <div className="card z-depth-1">
            <div className="blue card-title center-align white-text">CARDIO CARD</div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <MyCardioProgramHeader cardioData={this.data.myCardio} />
            <MyWeek1To4Cardio cardioData={this.data.myCardio} />
            <MyWeek5To8Cardio cardioData={this.data.myCardio} />
            <MyWeek9To12Cardio cardioData={this.data.myCardio} />
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