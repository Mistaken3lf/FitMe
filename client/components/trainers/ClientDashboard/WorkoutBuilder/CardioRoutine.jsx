import React from 'react';

CardioRoutine = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <span className="black-text">Cardio Routine</span>
          <div className="card white z-depth-1 workoutSpacing">
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="row">
                  <div className="col s12 m3 l3">
                    <span className="black-text workoutHeadings">Equipment Type:</span>
                    <input type="text" name="equipmentType" placeholder="Benchpress" />
                  </div>
                  <div className="col s12 m3 l3">
                    <span className="black-text workoutHeadings">Workout Name:</span>
                    <input type="text" name="cardioComments" placeholder="Comments or Concerns" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});