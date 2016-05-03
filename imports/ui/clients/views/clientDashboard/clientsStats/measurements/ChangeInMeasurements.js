import React from 'react';
import moment from 'moment';

MyMeasureChange = React.createClass({
  neckMeasureChange() {
    let neckMeasureChange = this.props.statsData.measureRT3Neck - this.props.statsData.measureRT1Neck;
    return neckMeasureChange;
  },

  chestMeasureChange() {
    let chestMeasureChange = this.props.statsData.measureRT3Chest - this.props.statsData.measureRT1Chest;
    return chestMeasureChange;
  },

  shoulderMeasureChange() {
    let shoulderMeasureChange = this.props.statsData.measureRT3Shoulders - this.props.statsData.measureRT1Shoulders;
    return shoulderMeasureChange;
  },

  waistMeasureChange() {
    let waistMeasureChange = this.props.statsData.measureRT3Waist - this.props.statsData.measureRT1Waist;
    return waistMeasureChange;
  },

  hipsMeasureChange() {
    let hipsMeasureChange = this.props.statsData.measureRT3Hips - this.props.statsData.measureRT1Hips;
    return hipsMeasureChange;
  },

  thighMeasureChange() {
    let thighMeasureChange = this.props.statsData.measureRT3Thigh - this.props.statsData.measureRT1Thigh;
    return thighMeasureChange;
  },

  calfMeasureChange() {
    let calfMeasureChange = this.props.statsData.measureRT3Calf - this.props.statsData.measureRT1Calf;
    return calfMeasureChange;
  },

  bicepMeasureChange() {
    let bicepMeasureChange = this.props.statsData.measureRT3Bicep - this.props.statsData.measureRT1Bicep;
    return bicepMeasureChange;
  },

  forearmMeasureChange() {
    let forearmMeasureChange = this.props.statsData.measureRT3Forearm - this.props.statsData.measureRT1Forearm;
    return forearmMeasureChange;
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
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Neck:</span><br /><br />{this.neckMeasureChange()}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Chest:</span><br /><br />{this.chestMeasureChange()}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Shoulders:</span><br /><br />{this.shoulderMeasureChange()}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Waist:</span><br /><br />{this.waistMeasureChange()}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Hips:</span><br /><br />{this.hipsMeasureChange()}
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Thigh:</span><br /><br />{this.thighMeasureChange()}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Calf:</span><br /><br />{this.calfMeasureChange()}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Bicep:</span><br /><br />{this.bicepMeasureChange()}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Forearm:</span><br /><br />{this.forearmMeasureChange()}
          </div>
        </div>
      </div>
    );
  }
});