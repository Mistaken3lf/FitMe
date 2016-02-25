StatsChange = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Change</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="statsChangeDate" placeholder="Ex. 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l3">
            <span className="bodyStatsLabel">Body Weight:</span><br /><br />{this.props.bodyWeightChange}<br />
          </div>
          <div className="col s12 m2 l3">
            <span className="bodyStatsLabel">Body Fat %:</span><br /><br />{this.props.bodyFatPercentChange}<br />
          </div>
          <div className="col s12 m2 l3">
            <span className="bodyStatsLabel">Lbs. Body Fat:</span><br /><br />{this.props.changeInPounds}<br />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l3">
            <span className="bodyStatsLabel">Lbs. Lean Mass:</span><br /><br />{this.props.leanMass}<br />
          </div>
          <div className="col s12 m2 l3">
            <span className="bodyStatsLabel">Lbs. BF Lost:</span><br /><br />{this.props.fatLost}<br />
          </div>
          <div className="col s12 m2 l4">
            <span className="bodyStatsLabel">Lbs. Lean Muscle Gain:</span><br /><br />{this.props.muscleGained}<br />
          </div>
        </div>
      </div>
    );
  }
});