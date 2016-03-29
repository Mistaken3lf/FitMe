import React from 'react';

MyExerciseEight = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;

    Meteor.call("updateMyWorkout", {
      fieldName, data
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, "danger");
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
                <input type="text" name="ExName8" defaultValue={this.props.workoutData.ExName8} placeholder="Exercise Name" readOnly />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 1</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex8set1rep" defaultValue={this.props.workoutData.ex8set1rep} placeholder="Ex. 10" readOnly />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex8set1wt" defaultValue={this.props.workoutData.ex8set1wt} placeholder="Ex. 150" readOnly />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 2</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex8set2rep" defaultValue={this.props.workoutData.ex8set2rep} placeholder="Ex. 10" readOnly />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex8set2wt" defaultValue={this.props.workoutData.ex8set2wt} placeholder="Ex. 150" readOnly />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 3</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex8set3rep" defaultValue={this.props.workoutData.ex8set3rep} placeholder="Ex. 10" readOnly />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex8set3wt" defaultValue={this.props.workoutData.ex8set3wt} placeholder="Ex. 150" readOnly />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 4</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex8set4rep" defaultValue={this.props.workoutData.ex8set4rep} placeholder="Ex. 10" readOnly />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex8set4wt" defaultValue={this.props.workoutData.ex8set4wt} placeholder="Ex. 150" readOnly />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 5</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex8set5rep" defaultValue={this.props.workoutData.ex8set5rep} placeholder="Ex. 10" readOnly />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex8set5wt" defaultValue={this.props.workoutData.ex8set5wt} placeholder="Ex. 10" readOnly />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6 l6">
                <span className="blue-text">Trainers Comments:</span>
                <textarea name="ex8TrainerComments" className="materialize-textarea" defaultValue={this.props.workoutData.ex8TrainerComments} placeholder="Comments or concerns for your client" readOnly></textarea>
              </div>
              <div className="col s12 m6 l6">
                <span className="blue-text">Clients Comments:</span>
                <textarea name="ex8ClientComments" className="materialize-textarea" defaultValue={this.props.workoutData.ex8ClientComments} onChange={this.updateField} placeholder="Comments or concerns for your trainer"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});