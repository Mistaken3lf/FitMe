TrainersClients = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const trainerId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("trainersClients", trainerId);

    return {
      loading: !handle.ready(),

      trainersClients: Meteor.users.find({
        createdBy: trainerId
      }).fetch()
    };
  },

  render() {
    if (this.data.loading) {
      return (
        <Loading />
      );
    } else {
      return (
        <div className="card white">
          <div className="row">
            <div className="col s12 m12 l12">
              <div className="card">
                <div className="black card-title center-align white-text">CURRENT CLIENTS</div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <AdminClientTable trainersClients={this.data.trainersClients} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
});