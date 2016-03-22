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
                  <span className="black-text workoutHeadings">Date:</span>
                  <input type="date" name="workoutBuilderDate" placeholder="Ex. 05-29-1990" />
                </div>
                <div className="col s12 m3 l3">
                  <span className="black-text workoutHeadings">Workout Name:</span>
                  <input type="text" name="workoutBuilderName" placeholder="Big Lifts" />
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