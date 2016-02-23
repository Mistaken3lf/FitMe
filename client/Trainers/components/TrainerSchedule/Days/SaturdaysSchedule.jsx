SaturdaysSchedule = React.createClass({
  render() {
    return (
      <div class="col s12 m6 l6">
        <div class="card white trainerSchedule">
          <div class="row">
            <div class="col s12 m12 l12">
              <h4 class="center">Saturday</h4>
              {this.props.saturdaysData.map((saturday) => {
              return (
                <div>
                  <li><a href="#">{saturday.firstName} {saturday.lastName} </a><span class="removeFromSaturdayMobile">[x]</span><h6 class="workoutStartTime"><b>Start:</b> {saturday.saturdaysScheduleStart}</h6> <h6 class="workoutEndTime"><b>End:</b> {saturday.saturdaysScheduleEnd} <span class="removeFromSaturday">[x]</span></h6></li>
                  <div class="workoutDescription">Notes: {saturday.saturdayDescription}</div>
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