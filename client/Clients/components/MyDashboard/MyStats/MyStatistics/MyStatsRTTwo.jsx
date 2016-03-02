MyStatsRTTwo = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Retest 2</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="statsRT2Date" defaultValue={this.props.statsData.statsRT2Date} readOnly placeholder="Ex 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Weight:</span>
            <input type="number" name="statsRT2BodyWeight" defaultValue={this.props.statsData.statsRT2BodyWeight} readOnly placeholder="Ex 150" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Fat %:</span>
            <input type="number" name="statsRT2BodyFatPercent" defaultValue={this.props.statsData.statsRT2BodyFatPercent} readOnly placeholder="Ex 8" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Body Fat:</span>
            <input type="number" name="statsRT2BodyFatLbs" defaultValue={this.props.statsData.statsRT2BodyFatLbs} readOnly placeholder="Ex. 15" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Mass:</span>
            <input type="number" name="statsRT2LeanMass" defaultValue={this.props.statsData.statsRT2LeanMass} readOnly placeholder="Ex 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. BF Lost:</span>
            <input type="number" name="statsRT2BodyFatLost" defaultValue={this.props.statsData.statsRT2BodyFatLost} readOnly placeholder="Ex. 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Muscle Gain</span>
            <input type="number" name="statsRT2LeanMuscleGain" defaultValue={this.props.statsData.statsRT2LeanMuscleGain} readOnly placeholder="Ex 100" />
          </div>
        </div>
      </div>
    );
  }
});