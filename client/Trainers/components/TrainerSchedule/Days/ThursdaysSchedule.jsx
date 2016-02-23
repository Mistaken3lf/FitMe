ThursdaysSchedule = React.createClass({
  render() {
    return (
      <div class="col s12 m6 l6">
        <div class="card white trainerSchedule">
          <div class="row">
            <div class="col s12 m12 l12">
              <h4 class="center">Thursday</h4>
              {this.props.thursdaysData.map((thursday) => {
              return (
                <div>
                  <li><a href="#">{thursday.firstName} {thursday.lastName} </a><span class="removeFromThursdayMobile">[x]</span><h6 class="workoutStartTime"><b>Start:</b> {thursday.thursdaysScheduleStart}</h6> <h6 class="workoutEndTime"><b>End:</b> {thursday.thursdaysScheduleEnd} <span class="removeFromThursday">[x]</span></h6></li>
                  <div class="workoutDescription">Notes: {thursday.thursdayDescription}</div>
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