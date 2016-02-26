MeasureInitialTest = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call("updateClientsStats", {
      fieldName, data, clientId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, "danger");
      }
    });
  },

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4 l3">
            <h5 className="bodyStatsHeading">Initial Test</h5>
            <span className="bodyStatsLabel">Date:</span>
            <input type="date" name="measureITDate" defaultValue={this.props.statsData.measureITDate} onChange={this.updateField} placeholder="Ex. 05-29-1990" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Neck:</span>
            <input type="number" name="measureITNeck" defaultValue={this.props.statsData.measureITNeck} onChange={this.updateField} placeholder="Ex. 28" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Chest:</span>
            <input type="number" name="measureITChest" defaultValue={this.props.statsData.measureITChest} onChange={this.updateField} placeholder="Ex. 29" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Shoulders:</span>
            <input type="number" name="measureITShoulders" defaultValue={this.props.statsData.measureITShoulders} onChange={this.updateField} placeholder="Ex. 15" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Waist:</span>
            <input type="number" name="measureITWaist" defaultValue={this.props.statsData.measureITWaist} onChange={this.updateField} placeholder="Ex. 100" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Hips:</span>
            <input type="number" name="measureITHips" defaultValue={this.props.statsData.measureITHips} onChange={this.updateField} placeholder="Ex. 100" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Thigh:</span>
            <input type="number" name="measureITThigh" defaultValue={this.props.statsData.measureITThigh} onChange={this.updateField} placeholder="Ex. 150" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Calf:</span>
            <input type="number" name="measureITCalf" defaultValue={this.props.statsData.measureITCalf} onChange={this.updateField} placeholder="Ex. 8" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Bicep:</span>
            <input type="number" name="measureITBicep" defaultValue={this.props.statsData.measureITBicep} onChange={this.updateField} placeholder="Ex. 15" />
          </div>
          <div className="col s12 m2 l2">
            <span className="bodyStatsLabel">Forearm:</span>
            <input type="number" name="measureITForearm" defaultValue={this.props.statsData.measureITForearm} onChange={this.updateField} placeholder="Ex. 23" />
          </div>
        </div>
      </div>
    );
  }
});