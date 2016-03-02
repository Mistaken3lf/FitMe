MyStatsRTOne = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Retest 1</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="statsRT1Date" defaultValue={this.props.statsData.statsRT1Date} readOnly placeholder="Ex 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Weight:</span>
            <input type="number" name="statsRT1BodyWeight" defaultValue={this.props.statsData.statsRT1BodyWeight} readOnly placeholder="Ex 150" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Fat %:</span>
            <input type="number" name="statsRT1BodyFatPercent" defaultValue={this.props.statsData.statsRT1BodyFatPercent} readOnly placeholder="Ex 8" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Body Fat:</span>
            <input type="number" name="statsRT1BodyFatLbs" defaultValue={this.props.statsData.statsRT1BodyFatLbs} readOnly placeholder="Ex. 15" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Mass:</span>
            <input type="number" name="statsRT1LeanMass" defaultValue={this.props.statsData.statsRT1LeanMass} readOnly placeholder="Ex 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. BF Lost:</span>
            <input type="number" name="statsRT1BodyFatLost" defaultValue={this.props.statsData.statsRT1BodyFatLost} readOnly placeholder="Ex. 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Muscle Gain</span>
            <input type="number" name="statsRT1LeanMuscleGain" defaultValue={this.props.statsData.statsRT1LeanMuscleGain} readOnly placeholder="Ex 100" />
          </div>
        </div>
      </div>
    );
  }
});