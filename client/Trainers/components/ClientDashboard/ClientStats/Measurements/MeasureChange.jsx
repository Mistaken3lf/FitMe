MeasureChange = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Change</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="measureChangeDate" placeholder="Ex. 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Neck:</span><br /><br />{this.props.neckMeasureChange}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Chest:</span><br /><br />{this.props.chestMeasureChange}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Shoulders:</span><br /><br />{this.props.shoulderMeasureChange}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Waist:</span><br /><br />{this.props.waistMeasureChange}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Hips:</span><br /><br />{this.props.hipsMeasureChange}
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Thigh:</span><br /><br />{this.props.thighMeasureChange}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Calf:</span><br /><br />{this.props.calfMeasureChange}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Bicep:</span><br /><br />{this.props.bicepMeasureChange}
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Forearm:</span><br /><br />{this.props.forearmMeasureChange}
          </div>
        </div>
      </div>
    );
  }
});