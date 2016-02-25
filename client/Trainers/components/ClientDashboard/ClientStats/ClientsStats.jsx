ClientsStats = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const clientId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("currentClientsStats", clientId);

    return {
      loading: !handle.ready(),

      currentClient: Meteor.users.findOne({
        _id: clientId
      }),
    };
  },

  render() {
    if (Meteor.loggingIn()) {
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
                  <StatsInitialTest />
                  <StatsRTOne />
                  <StatsRTTwo />
                  <StatsRTThree />
                  <StatsChange />
                <span className="card-title black-text">{this.data.currentClient.lastName}'s Measurements</span>
                <div className="card white z-depth-1 spacing">
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <MeasureInitialTest />
                      <MeasureRTOne />
                      <MeasureRTTwo />
                      <MeasureRTThree />
                      <MeasureChange />
                    </div>
                  </div>
                </div>
              </div>
              <BodyFatChart />
              <HeartRateChart />
            </div>
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