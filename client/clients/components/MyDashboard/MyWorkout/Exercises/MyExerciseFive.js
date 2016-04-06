import React from 'react';
import Alert from 'react-s-alert';

MyExerciseFive = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;

    Meteor.call("updateMyWorkout", {
      fieldName, data
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
    });
  },

  render() {
    return (
      <div className="card white z-depth-1 workoutSpacing">
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="row">
              <div className="col s12 m2 l2">
                <span className="black-text workoutHeadings">Exercise:</span>
                <input type="text" name="ExName5" defaultValue={this.props.workoutData.ExName5} placeholder="Exercise Name" readOnly />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 1</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex5set1rep" defaultValue={this.props.workoutData.ex5set1rep} placeholder="Ex. 10" readOnly />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex5set1wt" defaultValue={this.props.workoutData.ex5set1wt} placeholder="Ex. 150" readOnly />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 2</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex5set2rep" defaultValue={this.props.workoutData.ex5set2rep} placeholder="Ex. 10" readOnly />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex5set2wt" defaultValue={this.props.workoutData.ex5set2wt} placeholder="Ex. 150" readOnly />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 3</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex5set3rep" defaultValue={this.props.workoutData.ex5set3rep} placeholder="Ex. 10" readOnly />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex5set3wt" defaultValue={this.props.workoutData.ex5set3wt} placeholder="Ex. 150" readOnly />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 4</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex5set4rep" defaultValue={this.props.workoutData.ex5set4rep} placeholder="Ex. 10" readOnly />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex5set4wt" defaultValue={this.props.workoutData.ex5set4wt} placeholder="Ex. 150" readOnly />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 5</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex5set5rep" defaultValue={this.props.workoutData.ex5set5rep} placeholder="Ex. 10" readOnly />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex5set5wt" defaultValue={this.props.workoutData.ex5set5wt} placeholder="Ex. 10" readOnly />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6 l6">
                <span className="blue-text">Trainers Comments:</span>
                <textarea name="ex5TrainerComments" className="materialize-textarea" defaultValue={this.props.workoutData.ex5TrainerComments} placeholder="Comments or concerns for your client" readOnly></textarea>
              </div>
              <div className="col s12 m6 l6">
                <span className="blue-text">Clients Comments:</span>
                <textarea name="ex5ClientComments" className="materialize-textarea" defaultValue={this.props.workoutData.ex5ClientComments} onChange={this.updateField} placeholder="Comments or concerns for your trainer"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});