TuesdaysSchedule = React.createClass({
  render() {
    return (
      <div class="col s12 m6 l6">
        <div class="card white trainerSchedule">
          <div class="row">
            <div class="col s12 m12 l12">
              <h4 class="center">Tuesday</h4>
              {this.props.tuesdaysData.map((tuesday) => {
              return (
                <div>
                  <li><a href="#">{tuesday.firstName} {tuesday.lastName} </a><span class="removeFromTuesdayMobile">[x]</span><h6 class="workoutStartTime"><b>Start:</b> {tuesday.tuesdaysScheduleStart}</h6> <h6 class="workoutEndTime"><b>End:</b> {tuesday.tuesdaysScheduleEnd} <span class="removeFromTuesday">[x]</span></h6></li>
                  <div class="workoutDescription">Notes: {tuesday.tuesdayDescription}</div>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
});