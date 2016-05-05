import React from 'react';
import Alert from 'react-s-alert';

MeasureRTTwo = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call('updateClientsStats', {
      fieldName, data, clientId,
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly',
        });
      }
    });
  },

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Retest 1</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="measureRT2Date" defaultValue={this.props.statsData.measureRT2Date} onChange={this.updateField} placeholder="Ex. 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Neck:</span>
            <input type="number" name="measureRT2Neck" defaultValue={this.props.statsData.measureRT2Neck} onChange={this.updateField} placeholder="Ex. 28" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Chest:</span>
            <input type="number" name="measureRT2Chest" defaultValue={this.props.statsData.measureRT2Chest} onChange={this.updateField} placeholder="Ex. 29" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Shoulders:</span>
            <input type="number" name="measureRT2Shoulders" defaultValue={this.props.statsData.measureRT2Shoulders} onChange={this.updateField} placeholder="Ex. 15" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Waist:</span>
            <input type="number" name="measureRT2Waist" defaultValue={this.props.statsData.measureRT2Waist} onChange={this.updateField} placeholder="Ex. 100" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Hips:</span>
            <input type="number" name="measureRT2Hips" defaultValue={this.props.statsData.measureRT2Hips} onChange={this.updateField} placeholder="Ex. 100" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Thigh:</span>
            <input type="number" name="measureRT2Thigh" defaultValue={this.props.statsData.measureRT2Thigh} onChange={this.updateField} placeholder="Ex. 150" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Calf:</span>
            <input type="number" name="measureRT2Calf" defaultValue={this.props.statsData.measureRT2Calf} onChange={this.updateField} placeholder="Ex. 8" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Bicep:</span>
            <input type="number" name="measureRT2Bicep" defaultValue={this.props.statsData.measureRT2Bicep} onChange={this.updateField} placeholder="Ex. 15" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Forearm:</span>
            <input type="number" name="measureRT2Forearm" defaultValue={this.props.statsData.measureRT2Forearm} onChange={this.updateField} placeholder="Ex. 23" />
          </div>
        </div>
      </div>
    );
  },
});