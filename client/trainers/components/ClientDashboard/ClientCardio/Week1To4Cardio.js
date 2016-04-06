import React from 'react';
import Alert from 'react-s-alert';

Week1To4Cardio = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call("updateClientsCardio", {
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

  startBeatsPerMinuteWeek14() {
    let startIntensityW14 = this.props.cardioData.cardioW14StartPercentIntensity / 100;
    let startBeatsPerMinutePart1 = this.props.cardioData.cardioW14StartMaxHeartRate - this.props.cardioData.cardioW14StartRestingHeartRate;
    let startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW14;
    let startBeatsPerMinuteW14 = startBeatsPerMinutePart2 + this.props.cardioData.cardioW14StartRestingHeartRate;

    return startBeatsPerMinuteW14;
  },

  endBeatsPerMinuteWeek14() {
    let endIntensityW14 = this.props.cardioData.cardioW14EndPercentIntensity / 100;
    let endBeatsPerMinutePart1 = this.props.cardioData.cardioW14EndMaxHeartRate - this.props.cardioData.cardioW14EndRestingHeartRate;
    let endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW14;
    let endBeatsPerMinuteW14 = endBeatsPerMinutePart2 + this.props.cardioData.cardioW14EndRestingHeartRate;

    return endBeatsPerMinuteW14;
  },

  render() {
    return (
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title blue-text">WEEKS 1 - 4</span>
          <div className="row">
            <div className="col s12 m3 l3">
              <span className="cardioLabel">Start Date:</span>
              <input type="date" name="cardioW14StartDate" defaultValue={this.props.cardioData.cardioW14StartDate} onChange={this.updateField} placeholder="Ex 05-29-1990" />
            </div>
          </div>
          <div className="row">
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ( </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align inputAlign" name="cardioW14StartMaxHeartRate" defaultValue={this.props.cardioData.cardioW14StartMaxHeartRate} onChange={this.updateField} placeholder="MHR" />
              <label className="black-text" htmlFor="BPM">Max HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#8722; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW14StartRestingHeartRate" defaultValue={this.props.cardioData.cardioW14StartRestingHeartRate} onChange={this.updateField} placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ) &nbsp;&nbsp;&nbsp;&nbsp; &#215;</div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW14StartPercentIntensity" defaultValue={this.props.cardioData.cardioW14StartPercentIntensity} onChange={this.updateField} placeholder="% I" />
              <label className="black-text" htmlFor="BPM">% Intensity</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#43; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="inputAdjust center-align" name="cardioW14StartRestingHeartRate" defaultValue={this.props.cardioData.cardioW14StartRestingHeartRate} onChange={this.updateField} placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsEqual center-align"> &#61; </div>
            </div>
            <div className="col s12 m2 l2">
              <b>{this.startBeatsPerMinuteWeek14()}</b>
              <br />
              <label className="cardioLabel black-text" htmlFor="BPM">Beats Per Minute</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3 l3">
              <span className="cardioLabel">End Date:</span>
              <input type="date" name="cardioW14EndDate" defaultValue={this.props.cardioData.cardioW14EndDate} onChange={this.updateField} placeholder="Ex. 05-29-1990" />
            </div>
          </div>
          <div className="row">
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ( </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW14EndMaxHeartRate" defaultValue={this.props.cardioData.cardioW14EndMaxHeartRate} onChange={this.updateField} placeholder="MHR" />
              <label className="black-text" htmlFor="BPM">Max HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#8722; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW14EndRestingHeartRate" defaultValue={this.props.cardioData.cardioW14EndRestingHeartRate} onChange={this.updateField} placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ) &nbsp;&nbsp;&nbsp;&nbsp; &#215;</div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW14EndPercentIntensity" defaultValue={this.props.cardioData.cardioW14EndPercentIntensity} onChange={this.updateField} placeholder="% I" />
              <label className="black-text" htmlFor="BPM">% Intensity</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#43; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW14EndRestingHeartRate" defaultValue={this.props.cardioData.cardioW14EndRestingHeartRate} onChange={this.updateField} placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsEqual center-align"> &#61; </div>
            </div>
            <div className="col s12 m2 l2">
              <b>{this.endBeatsPerMinuteWeek14()}</b>
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
                  <textarea name="cardioW14Beginner" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW14Beginner} onChange={this.updateField} placeholder="Message"></textarea>
                </div>
                <div className="col s12 m6 l6">
                  <span className="cardioLabel">Intermediate:</span>
                  <textarea name="cardioW14Intermediate" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW14Intermediate} onChange={this.updateField} placeholder="Message"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 l6">
                  <span className="cardioLabel">Advanced:</span>
                  <textarea name="cardioW14Advanced" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW14Advanced} onChange={this.updateField} placeholder="Message"></textarea>
                </div>
                <div className="col s12 m6 l6">
                  <span className="cardioLabel">Type:</span>
                  <textarea name="cardioW14Type" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW14Type} onChange={this.updateField} placeholder="Message"></textarea>
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