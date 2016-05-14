import React from 'react';

MyStatsRTThree = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Retest 3</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="statsRT3Date" defaultValue={this.props.statsData.statsRT3Date} readOnly placeholder="Ex 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Weight:</span>
            <input type="number" name="statsRT3BodyWeight" defaultValue={this.props.statsData.statsRT3BodyWeight} readOnly placeholder="Ex 150" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Fat %:</span>
            <input type="number" name="statsRT3BodyFatPercent" defaultValue={this.props.statsData.statsRT3BodyFatPercent} readOnly placeholder="Ex 8" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Body Fat:</span>
            <input type="number" name="statsRT3BodyFatLbs" defaultValue={this.props.statsData.statsRT3BodyFatLbs} readOnly placeholder="Ex. 15" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Mass:</span>
            <input type="number" name="statsRT3LeanMass" defaultValue={this.props.statsData.statsRT3LeanMass} readOnly placeholder="Ex 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. BF Lost:</span>
            <input type="number" name="statsRT3BodyFatLost" defaultValue={this.props.statsData.statsRT3BodyFatLost} readOnly placeholder="Ex. 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Muscle Gain</span>
            <input type="number" name="statsRT3LeanMuscleGain" defaultValue={this.props.statsData.statsRT3LeanMuscleGain} readOnly placeholder="Ex 100" />
          </div>
        </div>
      </div>
    );
  },
});