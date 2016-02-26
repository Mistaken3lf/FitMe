StatsRTTwo = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call("updateClientsStats", {
      fieldName, data, clientId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, "danger");
      }
    });
  },

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Retest 2</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="statsRT2Date" defaultValue={this.props.statsData.statsRT2Date} onChange={this.updateField} placeholder="Ex 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Weight:</span>
            <input type="number" name="statsRT2BodyWeight" defaultValue={this.props.statsData.statsRT2BodyWeight} onChange={this.updateField} placeholder="Ex 150" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Fat %:</span>
            <input type="number" name="statsRT2BodyFatPercent" defaultValue={this.props.statsData.statsRT2BodyFatPercent} onChange={this.updateField} placeholder="Ex 8" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Body Fat:</span>
            <input type="number" name="statsRT2BodyFatLbs" defaultValue={this.props.statsData.statsRT2BodyFatLbs} onChange={this.updateField} placeholder="Ex. 15" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Mass:</span>
            <input type="number" name="statsRT2LeanMass" defaultValue={this.props.statsData.statsRT2LeanMass} onChange={this.updateField} placeholder="Ex 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. BF Lost:</span>
            <input type="number" name="statsRT2BodyFatLost" defaultValue={this.props.statsData.statsRT2BodyFatLost} onChange={this.updateField} placeholder="Ex. 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Muscle Gain</span>
            <input type="number" name="statsRT2LeanMuscleGain" defaultValue={this.props.statsData.statsRT2LeanMuscleGain} onChange={this.updateField} placeholder="Ex 100" />
          </div>
        </div>
      </div>
    );
  }
});