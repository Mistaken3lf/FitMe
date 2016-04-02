import React from 'react';

MyMeasureRTOne = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Retest 1</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="measureRT1Date" defaultValue={this.props.statsData.measureRT1Date} readOnly placeholder="Ex. 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Neck:</span>
            <input type="number" name="measureRT1Neck" defaultValue={this.props.statsData.measureRT1Neck} readOnly placeholder="Ex. 28" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Chest:</span>
            <input type="number" name="measureRT1Chest" defaultValue={this.props.statsData.measureRT1Chest} readOnly placeholder="Ex. 29" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Shoulders:</span>
            <input type="number" name="measureRT1Shoulders" defaultValue={this.props.statsData.measureRT1Shoulders} readOnly placeholder="Ex. 15" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Waist:</span>
            <input type="number" name="measureRT1Waist" defaultValue={this.props.statsData.measureRT1Waist} readOnly placeholder="Ex. 100" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Hips:</span>
            <input type="number" name="measureRT1Hips" defaultValue={this.props.statsData.measureRT1Hips} readOnly placeholder="Ex. 100" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Thigh:</span>
            <input type="number" name="measureRT1Thigh" defaultValue={this.props.statsData.measureRT1Thigh} readOnly placeholder="Ex. 150" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Calf:</span>
            <input type="number" name="measureRT1Calf" defaultValue={this.props.statsData.measureRT1Calf} readOnly placeholder="Ex. 8" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Bicep:</span>
            <input type="number" name="measureRT1Bicep" defaultValue={this.props.statsData.measureRT1Bicep} readOnly placeholder="Ex. 15" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Forearm:</span>
            <input type="number" name="measureRT1Forearm" defaultValue={this.props.statsData.measureRT1Forearm} readOnly placeholder="Ex. 23" />
          </div>
        </div>
      </div>
    );
  }
});