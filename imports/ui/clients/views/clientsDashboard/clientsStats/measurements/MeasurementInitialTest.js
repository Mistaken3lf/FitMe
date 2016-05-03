import React from 'react';

MyMeasureInitialTest = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Initial Test</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="measureITDate" defaultValue={this.props.statsData.measureITDate} readOnly placeholder="Ex. 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Neck:</span>
            <input type="number" name="measureITNeck" defaultValue={this.props.statsData.measureITNeck} readOnly placeholder="Ex. 28" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Chest:</span>
            <input type="number" name="measureITChest" defaultValue={this.props.statsData.measureITChest} readOnly placeholder="Ex. 29" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Shoulders:</span>
            <input type="number" name="measureITShoulders" defaultValue={this.props.statsData.measureITShoulders} readOnly placeholder="Ex. 15" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Waist:</span>
            <input type="number" name="measureITWaist" defaultValue={this.props.statsData.measureITWaist} readOnly placeholder="Ex. 100" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Hips:</span>
            <input type="number" name="measureITHips" defaultValue={this.props.statsData.measureITHips} readOnly placeholder="Ex. 100" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Thigh:</span>
            <input type="number" name="measureITThigh" defaultValue={this.props.statsData.measureITThigh} readOnly placeholder="Ex. 150" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Calf:</span>
            <input type="number" name="measureITCalf" defaultValue={this.props.statsData.measureITCalf} readOnly placeholder="Ex. 8" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Bicep:</span>
            <input type="number" name="measureITBicep" defaultValue={this.props.statsData.measureITBicep} readOnly placeholder="Ex. 15" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Forearm:</span>
            <input type="number" name="measureITForearm" defaultValue={this.props.statsData.measureITForearm} readOnly placeholder="Ex. 23" />
          </div>
        </div>
      </div>
    );
  }
});