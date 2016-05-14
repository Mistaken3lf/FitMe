import React from 'react';

MyMeasureRTThree = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Retest 1</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="measureRT3Date" defaultValue={this.props.statsData.measureRT3Date} readOnly placeholder="Ex. 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Neck:</span>
            <input type="number" name="measureRT3Neck" defaultValue={this.props.statsData.measureRT3Neck} readOnly placeholder="Ex. 28" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Chest:</span>
            <input type="number" name="measureRT3Chest" defaultValue={this.props.statsData.measureRT3Chest} readOnly placeholder="Ex. 29" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Shoulders:</span>
            <input type="number" name="measureRT3Shoulders" defaultValue={this.props.statsData.measureRT3Shoulders} readOnly placeholder="Ex. 15" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Waist:</span>
            <input type="number" name="measureRT3Waist" defaultValue={this.props.statsData.measureRT3Waist} readOnly placeholder="Ex. 100" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Hips:</span>
            <input type="number" name="measureRT3Hips" defaultValue={this.props.statsData.measureRT3Hips} readOnly placeholder="Ex. 100" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Thigh:</span>
            <input type="number" name="measureRT3Thigh" defaultValue={this.props.statsData.measureRT3Thigh} readOnly placeholder="Ex. 150" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Calf:</span>
            <input type="number" name="measureRT3Calf" defaultValue={this.props.statsData.measureRT3Calf} readOnly placeholder="Ex. 8" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Bicep:</span>
            <input type="number" name="measureRT3Bicep" defaultValue={this.props.statsData.measureRT3Bicep} readOnly placeholder="Ex. 15" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Forearm:</span>
            <input type="number" name="measureRT3Forearm" defaultValue={this.props.statsData.measureRT3Forearm} readOnly placeholder="Ex. 23" />
          </div>
        </div>
      </div>
    );
  },
});