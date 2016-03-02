MyWorkoutDate = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col s12 m3 l3">
          <span className="black-text workoutHeadings">Date:</span>
          <input type="date" name="workoutDate" defaultValue={this.props.workoutData.workoutDate} placeholder="Ex. 05-29-1990" readOnly />
        </div>
      </div>
    );
  }
});