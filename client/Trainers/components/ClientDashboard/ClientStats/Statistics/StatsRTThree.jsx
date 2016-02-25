StatsRTThree = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Retest 1</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="statsRT3Date" placeholder="Ex 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Weight:</span>
            <input type="date" name="statsRT3BodyWeight" placeholder="Ex 150" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Fat %:</span>
            <input type="date" name="statsRT3BodyFatPercent" placeholder="Ex 8" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Body Fat:</span>
            <input type="date" name="statsRT3BodyFatLbs" placeholder="Ex. 15" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Mass:</span>
            <input type="date" name="statsRT3LeanMass" placeholder="Ex 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. BF Lost:</span>
            <input type="date" name="statsRT3BodyFatLost" placeholder="Ex. 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Muscle Gain</span>
            <input type="date" name="statsRT3LeanMuscleGain" placeholder="Ex 100" />
          </div>
        </div>
      </div>
    );
  }
});