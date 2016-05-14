import React from 'react';

WorkoutRoutine = React.createClass({
  render() {
    const styles = {
      textareaHeight: {
        height: 100,
        overflowY: 'scroll',
      },
    };

    return (
      <div className="row">
        <div className="col s12">
          <span className="black-text">Workout Routine</span>
          <div className="card white z-depth-1 workoutSpacing">
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="row">
                  <div className="col s12 m2 l2">
                    <span className="black-text workoutHeadings">Exercise:</span>
                    <input type="text" name="exerciseName" placeholder="Exercise Name" />
                  </div>
                  <div className="col s12 m2 l2">
                    <h5 className="blue-text workoutHeadings">SET 1</h5>
                    <span className="workoutLabels">Reps:</span>
                    <input type="number" name="set1Reps" placeholder="Ex. 10" />
                    <span className="workoutLabels">Weight:</span>
                    <input type="number" name="set1Weight" placeholder="Ex. 150" />
                  </div>
                  <div className="col s12 m2 l2">
                    <h5 className="blue-text workoutHeadings">SET 2</h5>
                    <span className="workoutLabels">Reps:</span>
                    <input type="number" name="set2Reps" placeholder="Ex. 10" />
                    <span className="workoutLabels">Weight:</span>
                    <input type="number" name="set2Weight" placeholder="Ex. 150" />
                  </div>
                  <div className="col s12 m2 l2">
                    <h5 className="blue-text workoutHeadings">SET 3</h5>
                    <span className="workoutLabels">Reps:</span>
                    <input type="number" name="set3Reps" placeholder="Ex. 10" />
                    <span className="workoutLabels">Weight:</span>
                    <input type="number" name="set3Weight" placeholder="Ex. 150" />
                  </div>
                  <div className="col s12 m2 l2">
                    <h5 className="blue-text workoutHeadings">SET 4</h5>
                    <span className="workoutLabels">Reps:</span>
                    <input type="number" name="set4Reps" placeholder="Ex. 10" />
                    <span className="workoutLabels">Weight:</span>
                    <input type="number" name="set4Weight" placeholder="Ex. 150" />
                  </div>
                  <div className="col s12 m2 l2">
                    <h5 className="blue-text workoutHeadings">SET 5</h5>
                    <span className="workoutLabels">Reps:</span>
                    <input type="number" name="set5Reps" placeholder="Ex. 10" />
                    <span className="workoutLabels">Weight:</span>
                    <input type="number" name="set5Weight" placeholder="Ex. 10" />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m6 l6">
                    <span className="blue-text">Trainers Comments:</span>
                    <textarea name="trainerComments" style={styles.textareaHeight} className="materialize-textarea" placeholder="Comments or concerns for your client"></textarea>
                  </div>
                  <div className="col s12 m6 l6">
                    <span className="blue-text">Clients Comments:</span>
                    <textarea name="clientsComments" style={styles.textareaHeight} className="materialize-textarea" placeholder="Comments or concerns for your trainer" readOnly></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});