import React from 'react';

MyStatsChange = React.createClass({
  bodyWeightChange() {
    let bodyWeightChange = this.props.statsData.statsRT3BodyWeight - this.props.statsData.statsRT1BodyWeight;
    return bodyWeightChange;
  },

  bodyFatPercentChange() {
    let bodyFatPercentChange = this.props.statsData.statsRT3BodyFatPercent - this.props.statsData.statsRT1BodyFatPercent;
    return bodyFatPercentChange;
  },

  changeInPounds() {
    let changeInPounds = this.props.statsData.statsRT3BodyFatLbs - this.props.statsData.statsRT1BodyFatLbs;
    return changeInPounds;
  },

  leanMass() {
    let leanMass = this.props.statsData.statsRT3LeanMass - this.props.statsData.statsRT1LeanMass;
    return leanMass;
  },

  fatLost() {
    let fatLost = this.props.statsData.statsRT3BodyFatLost - this.props.statsData.statsRT1BodyFatLost;
    return fatLost;
  },

  muscleGained() {
    let muscleGained = this.props.statsData.statsRT3LeanMuscleGain - this.props.statsData.statsRT1LeanMuscleGain;
    return muscleGained;
  },

  todaysDate() {
    return moment().format("ddd. MMM Do");
  },

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Change</h5>
            <span className="bodyStatsLabel">Date:</span>
            <div>{this.todaysDate()}</div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l3">
            <span className="bodyStatsLabel">Body Weight:</span><br /><br />{this.bodyWeightChange()}<br />
          </div>
          <div className="col s12 m2 l3">
            <span className="bodyStatsLabel">Body Fat %:</span><br /><br />{this.bodyFatPercentChange()}<br />
          </div>
          <div className="col s12 m2 l3">
            <span className="bodyStatsLabel">Lbs. Body Fat:</span><br /><br />{this.changeInPounds()}<br />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l3">
            <span className="bodyStatsLabel">Lbs. Lean Mass:</span><br /><br />{this.leanMass()}<br />
          </div>
          <div className="col s12 m2 l3">
            <span className="bodyStatsLabel">Lbs. BF Lost:</span><br /><br />{this.fatLost()}<br />
          </div>
          <div className="col s12 m2 l4">
            <span className="bodyStatsLabel">Lbs. Lean Muscle Gain:</span><br /><br />{this.muscleGained()}<br />
          </div>
        </div>
      </div>
    );
  }
});