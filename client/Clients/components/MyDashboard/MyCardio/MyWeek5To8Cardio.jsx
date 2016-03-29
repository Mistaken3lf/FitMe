import React from 'react';

MyWeek5To8Cardio = React.createClass({
  startBeatsPerMinuteWeek58() {
    let startIntensityW58 = this.props.cardioData.cardioW58StartPercentIntensity / 100;
    let startBeatsPerMinutePart1 = this.props.cardioData.cardioW58StartMaxHeartRate - this.props.cardioData.cardioW58StartRestingHeartRate;
    let startBeatsPerMinutePart2 = startBeatsPerMinutePart1 * startIntensityW58;
    let startBeatsPerMinuteW58 = startBeatsPerMinutePart2 + this.props.cardioData.cardioW58StartRestingHeartRate;

    return startBeatsPerMinuteW58;
  },

  endBeatsPerMinuteWeek58() {
    let endIntensityW58 = this.props.cardioData.cardioW58EndPercentIntensity / 100;
    let endBeatsPerMinutePart1 = this.props.cardioData.cardioW58EndMaxHeartRate - this.props.cardioData.cardioW58EndRestingHeartRate;
    let endBeatsPerMinutePart2 = endBeatsPerMinutePart1 * endIntensityW58;
    let endBeatsPerMinuteW58 = endBeatsPerMinutePart2 + this.props.cardioData.cardioW58EndRestingHeartRate;

    return endBeatsPerMinuteW58;
  },

  render() {
    return (
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title blue-text">WEEKS 5 - 8</span>
          <div className="row">
            <div className="col s12 m3 l3">
              <span className="cardioLabel">Start Date:</span>
              <input type="date" name="cardioW58StartDate" defaultValue={this.props.cardioData.cardioW58StartDate} readOnly placeholder="Ex 05-29-1990" />
            </div>
          </div>
          <div className="row">
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ( </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align inputAlign" name="cardioW58StartMaxHeartRate" defaultValue={this.props.cardioData.cardioW58StartMaxHeartRate} readOnly placeholder="MHR" />
              <label className="black-text" htmlFor="BPM">Max HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#8722; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW58StartRestingHeartRate" defaultValue={this.props.cardioData.cardioW58StartRestingHeartRate} readOnly placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ) &nbsp;&nbsp;&nbsp;&nbsp; &#215;</div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW58StartPercentIntensity" defaultValue={this.props.cardioData.cardioW58StartPercentIntensity} readOnly placeholder="% I" />
              <label className="black-text" htmlFor="BPM">% Intensity</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#43; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="inputAdjust center-align" name="cardioW58StartRestingHeartRate" defaultValue={this.props.cardioData.cardioW58StartRestingHeartRate} readOnly placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsEqual center-align"> &#61; </div>
            </div>
            <div className="col s12 m2 l2">
              <b>{this.startBeatsPerMinuteWeek58()}</b>
              <br />
              <label className="cardioLabel black-text" htmlFor="BPM">Beats Per Minute</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3 l3">
              <span className="cardioLabel">End Date:</span>
              <input type="date" name="cardioW58EndDate" defaultValue={this.props.cardioData.cardioW58EndDate} readOnly placeholder="Ex. 05-29-1990" />
            </div>
          </div>
          <div className="row">
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ( </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW58EndMaxHeartRate" defaultValue={this.props.cardioData.cardioW58EndMaxHeartRate} readOnly placeholder="MHR" />
              <label className="black-text" htmlFor="BPM">Max HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#8722; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW58EndRestingHeartRate" defaultValue={this.props.cardioData.cardioW58EndRestingHeartRate} readOnly placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> ) &nbsp;&nbsp;&nbsp;&nbsp; &#215;</div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW58EndPercentIntensity" defaultValue={this.props.cardioData.cardioW58EndPercentIntensity} readOnly placeholder="% I" />
              <label className="black-text" htmlFor="BPM">% Intensity</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsCP center-align"> &#43; </div>
            </div>
            <div className="col s12 m2 l1">
              <input type="number" className="center-align" name="cardioW58EndRestingHeartRate" defaultValue={this.props.cardioData.cardioW58EndRestingHeartRate} readOnly placeholder="RHR" />
              <label className="black-text" htmlFor="BPM">Resting HR</label>
            </div>
            <div className="col s1 m1 l1">
              <div className="mathSymbolsEqual center-align"> &#61; </div>
            </div>
            <div className="col s12 m2 l2">
              <b>{this.endBeatsPerMinuteWeek58()}</b>
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
                  <textarea name="cardioW58Beginner" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW58Beginner} readOnly placeholder="Message"></textarea>
                </div>
                <div className="col s12 m6 l6">
                  <span className="cardioLabel">Intermediate:</span>
                  <textarea name="cardioW58Intermediate" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW58Intermediate} readOnly placeholder="Message"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 l6">
                  <span className="cardioLabel">Advanced:</span>
                  <textarea name="cardioW58Advanced" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW58Advanced} readOnly placeholder="Message"></textarea>
                </div>
                <div className="col s12 m6 l6">
                  <span className="cardioLabel">Type:</span>
                  <textarea name="cardioW58Type" className="materialize-textarea" defaultValue={this.props.cardioData.cardioW58Type} readOnly placeholder="Message"></textarea>
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