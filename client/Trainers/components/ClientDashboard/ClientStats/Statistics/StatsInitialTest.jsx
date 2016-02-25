StatsInitialTest = React.createClass({
  render() {
    return (
      <div>
      <div className="row">
        <div className="col s12 m4 l3">
          <h5 className="bodyStatsHeading">Initial Test</h5>
          <span className="bodyStatsLabel">Date:</span>
          <input type="date" name="statsITDate" placeholder="Ex. 05-29-1990" />
        </div>
      </div>
      <div className="row">
        <div className="col s12 m2 l3">
          <span className="bodyStatsLabel">Body Weight:</span>
          <input type="number" name="statsITBodyWeight" placeholder="Ex. 150" />
        </div>
        <div className="col s12 m2 l3">
          <span className="bodyStatsLabel">Body Fat %:</span>
          <input type="number" name="statsITBodyFatPercent" placeholder="Ex. 8" />
        </div>
        <div className="col s12 m4 l3">
          <span className="bodyStatsLabel">Lbs. Body Fat:</span>
          <input type="number" name="statsITBodyFatLbs" placeholder="Ex. 15" />
        </div>
        <div className="col s12 m4 l3">
          <span className="bodyStatsLabel">Lbs. Lean Mass:</span>
          <input type="number" name="statsITLeanMass" placeholder="Ex. 50" />
        </div>
      </div>
    </div>
    );
  }
});