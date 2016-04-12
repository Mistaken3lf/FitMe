import React from 'react';
import Alert from 'react-s-alert';

StatsRTThree = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call("updateClientsStats", {
      fieldName, data, clientId
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
    });
  },

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Retest 3</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="statsRT3Date" defaultValue={this.props.statsData.statsRT3Date} onChange={this.updateField} placeholder="Ex 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Weight:</span>
            <input type="number" name="statsRT3BodyWeight" defaultValue={this.props.statsData.statsRT3BodyWeight} onChange={this.updateField} placeholder="Ex 150" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Body Fat %:</span>
            <input type="number" name="statsRT3BodyFatPercent" defaultValue={this.props.statsData.statsRT3BodyFatPercent} onChange={this.updateField} placeholder="Ex 8" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Body Fat:</span>
            <input type="number" name="statsRT3BodyFatLbs" defaultValue={this.props.statsData.statsRT3BodyFatLbs} onChange={this.updateField} placeholder="Ex. 15" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Mass:</span>
            <input type="number" name="statsRT3LeanMass" defaultValue={this.props.statsData.statsRT3LeanMass} onChange={this.updateField} placeholder="Ex 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. BF Lost:</span>
            <input type="number" name="statsRT3BodyFatLost" defaultValue={this.props.statsData.statsRT3BodyFatLost} onChange={this.updateField} placeholder="Ex. 100" />
          </div>
          <div className="col s12 m3 l3">
            <span className="bodyStatsLabel">Lbs. Lean Muscle Gain</span>
            <input type="number" name="statsRT3LeanMuscleGain" defaultValue={this.props.statsData.statsRT3LeanMuscleGain} onChange={this.updateField} placeholder="Ex 100" />
          </div>
        </div>
      </div>
    );
  }
});