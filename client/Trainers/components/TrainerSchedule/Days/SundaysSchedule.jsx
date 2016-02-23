SundaysSchedule = React.createClass({
  render() {
    return (
      <div class="col s12 m6 l6">
        <div class="card white trainerSchedule">
          <div class="row">
            <div class="col s12 m12 l12">
              <h4 class="center">Sunday</h4>
              {this.props.sundaysData.map((sunday) => {
              return (
                <div>
                  <li><a href="#">{sunday.firstName} {sunday.lastName} </a><span class="removeFromSundayMobile">[x]</span><h6 class="workoutStartTime"><b>Start:</b> {sunday.sundaysScheduleStart}</h6> <h6 class="workoutEndTime"><b>End:</b> {sunday.sundaysScheduleEnd} <span class="removeFromSunday">[x]</span></h6></li>
                  <div class="workoutDescription">Notes: {sunday.sundayDescription}</div>
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