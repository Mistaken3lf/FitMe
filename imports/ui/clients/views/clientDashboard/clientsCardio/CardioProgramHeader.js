import React from 'react';

MyCardioProgramHeader = React.createClass({
  maxHeartRate() {
    // Formula for max heart rate
    let maxHeartRate = 220 - this.props.cardioData.cardioProgramAge;
    return maxHeartRate;
  },

  render() {
    return (
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title blue-text">CARDIO PROGRAM</span>
          <div className="row">
            <div className="col s12 m6 l9">
              <div className="row">
                <div className="col s12 m4 l3">
                  <span className="cardioLabel">Age:</span>
                  <input type="number" name="cardioProgramAge" defaultValue={this.props.cardioData.cardioProgramAge} readOnly placeholder="Age" />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m4 l3">
                  <span className="cardioLabel">Resting Heart Rate:</span>
                  <input type="number" name="cardioProgramRestingHeartRate" defaultValue={this.props.cardioData.cardioProgramRestingHeartRate} readOnly placeholder="Resting Heart Rate" />
                </div>
              </div>
              <div className="row">
                <h6 className="cardioLabelMHR">Max Heart Rate:</h6>
              </div>
              <div className="row equationPadding">
                <div className="col s12 m1 l1">
                  220
                </div>
                <div className="col s1 m1 l1">
                  <div className="mathSymbolsCP center-align"> &#8722; </div>
                </div>
                <div className="col s12 m2 l2">
                  {this.props.cardioData.cardioProgramAge}
                </div>
                <div className="col s1 m1 l1">
                  <div className="mathSymbolsCP center-align"> &#61; </div>
                </div>
                <div className="col s12 m2 l2">
                  <b>{this.maxHeartRate()}</b>
                </div>
              </div>
            </div>
              <div className="col s12 m6 l3">
                <div className="card white">
                  <div className="card-content">
                    <img src="/Dashboard/Cardio/fitMeCardioLevels.png" className="responsive-img" />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  },
});