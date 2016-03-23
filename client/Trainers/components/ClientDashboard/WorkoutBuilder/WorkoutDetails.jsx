WorkoutDetails = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="col s12 l3 l3">
            <span className="black-text workoutHeadings">Date:</span>
            <input type="date" name="workoutBuilderDate" placeholder="Ex. 05-29-1990" />
          </div>
          <div className="col s12 m3 l3">
            <span className="black-text workoutHeadings">Workout Name:</span>
            <input type="text" name="workoutBuilderName" placeholder="Big Lifts" />
          </div>
          <div className="col s12 m4 l4">
            <SaveWorkoutButton />
          </div>
        </div>
      </div>
    );
  }
});