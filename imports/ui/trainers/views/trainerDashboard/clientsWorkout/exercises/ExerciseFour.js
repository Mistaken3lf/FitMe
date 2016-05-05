import React from 'react';
import Alert from 'react-s-alert';

ExerciseFour = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call('updateClientsWorkout', {
      fieldName, data, clientId,
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly',
        });
      }
    });
  },

  render() {
    const styles = {
      textareaHeight: {
        height: 100,
        overflowY: 'scroll',
      },
    };

    return (
      <div className="card white z-depth-1 workoutSpacing">
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="row">
              <div className="col s12 m2 l2">
                <span className="black-text workoutHeadings">Exercise:</span>
                <input type="text" name="ExName4" defaultValue={this.props.workoutData.ExName4} onChange={this.updateField} placeholder="Exercise Name" />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 1</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex4set1rep" defaultValue={this.props.workoutData.ex4set1rep} onChange={this.updateField} placeholder="Ex. 10" />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex4set1wt" defaultValue={this.props.workoutData.ex4set1wt} onChange={this.updateField} placeholder="Ex. 150" />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 2</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex4set2rep" defaultValue={this.props.workoutData.ex4set2rep} onChange={this.updateField} placeholder="Ex. 10" />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex4set2wt" defaultValue={this.props.workoutData.ex4set2wt} onChange={this.updateField} placeholder="Ex. 150" />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 3</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex4set3rep" defaultValue={this.props.workoutData.ex4set3rep} onChange={this.updateField} placeholder="Ex. 10" />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex4set3wt" defaultValue={this.props.workoutData.ex4set3wt} onChange={this.updateField} placeholder="Ex. 150" />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 4</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex4set4rep" defaultValue={this.props.workoutData.ex4set4rep} onChange={this.updateField} placeholder="Ex. 10" />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex4set4wt" defaultValue={this.props.workoutData.ex4set4wt} onChange={this.updateField} placeholder="Ex. 150" />
              </div>
              <div className="col s12 m2 l2">
                <h5 className="blue-text workoutHeadings">SET 5</h5>
                <span className="workoutLabels">Reps:</span>
                <input type="number" name="ex4set5rep" defaultValue={this.props.workoutData.ex4set5rep} onChange={this.updateField} placeholder="Ex. 10" />
                <span className="workoutLabels">Weight:</span>
                <input type="number" name="ex4set5wt" defaultValue={this.props.workoutData.ex4set5wt} onChange={this.updateField} placeholder="Ex. 10" />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6 l6">
                <span className="blue-text">Trainers Comments:</span>
                <textarea name="ex4TrainerComments" style={styles.textareaHeight} defaultValue={this.props.workoutData.ex4TrainerComments} onChange={this.updateField} placeholder="Comments or concerns for your client"></textarea>
              </div>
              <div className="col s12 m6 l6">
                <span className="blue-text">Clients Comments:</span>
                <textarea name="ex4ClientComments" style={styles.textareaHeight} defaultValue={this.props.workoutData.ex4ClientComments} placeholder="Comments or concerns for your trainer" readOnly></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});