StatsInitialTest = React.createClass({
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
      {this.props.statsData.map((stats) => {
        return (
        <div>
          <div className="row">
            <div className="col s12 m4 l3">
              <h5 className="bodyStatsHeading">Initial Test</h5>
              <span className="bodyStatsLabel">Date:</span>
              <input type="date" name="statsITDate" defaultValue={stats.statsITDate} onChange={this.updateField} placeholder="Ex. 05-29-1990" />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m2 l3">
              <span className="bodyStatsLabel">Body Weight:</span>
              <input type="text" name="statsITBodyWeight" defaultValue={stats.statsITBodyWeight} onChange={this.updateField} placeholder="Ex. 150" />
            </div>
            <div className="col s12 m2 l3">
              <span className="bodyStatsLabel">Body Fat %:</span>
              <input type="number" name="statsITBodyFatPercent" defaultValue={stats.statsITBodyFatPercent} onChange={this.updateField} placeholder="Ex. 8" />
            </div>
            <div className="col s12 m4 l3">
              <span className="bodyStatsLabel">Lbs. Body Fat:</span>
              <input type="number" name="statsITBodyFatLbs" defaultValue={stats.statsITBodyFatLbs} onChange={this.updateField} placeholder="Ex. 15" />
            </div>
            <div className="col s12 m4 l3">
              <span className="bodyStatsLabel">Lbs. Lean Mass:</span>
              <input type="number" name="statsITLeanMass" defaultValue={stats.statsITLeanMass} onChange={this.updateField} placeholder="Ex. 50" />
            </div>
          </div>
        </div>
       );
      })}
    </div>
    );
  }
});