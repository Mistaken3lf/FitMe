Week9To12Cardio = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call("updateClientsCardio", {
      fieldName, data, clientId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, "danger");
      }
    });
  },

  startBeatsPerMinuteWeek912() {
    let startIntensityW912 = this.props.cardioData.cardioW912StartPercentIntensity / 100;
    let startBeatsPerMinutePart1 = this.props.cardioData.cardioW912StartMaxHeartRate - this.props.cardioData.cardioW912StartRestingHeartRate;
    let startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW912;
    let startBeatsPerMinuteW912 = startBeatsPerMinutePart2 + this.props.cardioData.cardioW912StartRestingHeartRate;

    return startBeatsPerMinuteW912;
  },

  endBeatsPerMinuteWeek912() {
    let endIntensityW912 = this.props.cardioData.cardioW912EndPercentIntensity / 100;
    let endBeatsPerMinutePart1 = this.props.cardioData.cardioW912EndMaxHeartRate - this.props.cardioData.cardioW912EndRestingHeartRate;
    let endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW912;
    let endBeatsPerMinuteW912 = endBeatsPerMinutePart2 + this.props.cardioData.cardioW912EndRestingHeartRate;

    return endBeatsPerMinuteW912;
  },

  render() {
    return (
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title blue-text">WEEKS 9 - 12</span>
          <div className="row">
            <div className="col s12 m3 l3">
              <span className="cardioLabel">Start Date:</span>
              <input type="date" name="cardioW912StartDate" defaultValue={this.props.cardioData.cardioW912StartDate} onChange={this.updateField} placeholder="Ex 05-29-1990" />
            </div>
          </div>
          <div className="row">
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ( </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align inputAlign" name="cardioW912StartMaxHeartRate" defaultValue={this.props.cardioData.cardioW912StartMaxHeartRate} onChange={this.updateField} placeholder="MHR" />
              <label className="black-text" htmlFor="BPM">Max HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#8722; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW912StartRestingHeartRate" defaultValue={this.props.cardioData.cardioW912StartRestingHeartRate} onChange={this.updateField} placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ) &nbsp;&nbsp;&nbsp;&nbsp; &#215;</div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW912StartPercentIntensity" defaultValue={this.props.cardioData.cardioW912StartPercentIntensity} onChange={this.updateField} placeholder="% I" />
              <label className="black-text" htmlFor="BPM">% Intensity</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#43; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="inputAdjust center-align" name="cardioW912StartRestingHeartRate" defaultValue={this.props.cardioData.cardioW912StartRestingHeartRate} onChange={this.updateField} placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsEqual center-align"> &#61; </div>
            </div>
            <div className="col s12 m2 l2">
              <b>{this.startBeatsPerMinuteWeek912()}</b>
              <br />
              <label className="cardioLabel black-text" htmlFor="BPM">Beats Per Minute</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3 l3">
              <span className="cardioLabel">End Date:</span>
              <input type="date" name="cardioW912EndDate" defaultValue={this.props.cardioData.cardioW912EndDate} onChange={this.updateField} placeholder="Ex. 05-29-1990" />
            </div>
          </div>
          <div className="row">
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ( </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW912EndMaxHeartRate" defaultValue={this.props.cardioData.cardioW912EndMaxHeartRate} onChange={this.updateField} placeholder="MHR" />
              <label className="black-text" htmlFor="BPM">Max HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#8722; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW912EndRestingHeartRate" defaultValue={this.props.cardioData.cardioW912EndRestingHeartRate} onChange={this.updateField} placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ) &nbsp;&nbsp;&nbsp;&nbsp; &#215;</div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW912EndPercentIntensity" defaultValue={this.props.cardioData.cardioW912EndPercentIntensity} onChange={this.updateField} placeholder="% I" />
              <label className="black-text" htmlFor="BPM">% Intensity</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#43; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW912EndRestingHeartRate" defaultValue={this.props.cardioData.cardioW912EndRestingHeartRate} onChange={this.updateField} placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsEqual center-align"> &#61; </div>
            </div>
            <div className="col s12 m2 l2">
              <b>{this.endBeatsPerMinuteWeek912()}</b>
              <br />
              <label className="cardioLabel black-text" htmlFor="BPM">Beats Per Minute</label>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col s12 m6 l6">
              <div className="row">
                <div className="col s12 m6 l6">
                  <span className="cardioLabel">Beginner:</span>
                  <textarea name="cardioW912Beginner" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW912Beginner} onChange={this.updateField} placeholder="Message"></textarea>
                </div>
                <div className="col s12 m6 l6">
                  <span className="cardioLabel">Intermediate:</span>
                  <textarea name="cardioW912Intermediate" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW912Intermediate} onChange={this.updateField} placeholder="Message"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 l6">
                  <span className="cardioLabel">Advanced:</span>
                  <textarea name="cardioW912Advanced" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW912Advanced} onChange={this.updateField} placeholder="Message"></textarea>
                </div>
                <div className="col s12 m6 l6">
                  <span className="cardioLabel">Type:</span>
                  <textarea name="cardioW912Type" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW912Type} onChange={this.updateField} placeholder="Message"></textarea>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l3 offset-l1">
              <div className="card white">
                <div className="card-content">
                  <img src="/Dashboard/Cardio/fitMeCardioKey.png" className="responsive-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});