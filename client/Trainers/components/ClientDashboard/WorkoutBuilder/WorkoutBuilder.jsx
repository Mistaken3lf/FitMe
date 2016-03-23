WorkoutBuilder = React.createClass({
  render() {
    return (
      <div className="card grey lighten-4">
        <div className="col s12 m12 l12">
          <div className="card z-depth-1">
            <div className="blue card-title center-align white-text">WORKOUT BUILDER</div>
          </div>
        </div>
        <WorkoutDetails />
        <CardioRoutine />
        <WorkoutRoutine />
        <AddExerciseButton />
      </div>
    );
  }
});