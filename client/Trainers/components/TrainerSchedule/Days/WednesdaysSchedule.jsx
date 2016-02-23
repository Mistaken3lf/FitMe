WednesdaysSchedule = React.createClass({
  render() {
    return (
      <div class="col s12 m6 l6">
        <div class="card white trainerSchedule">
          <div class="row">
            <div class="col s12 m12 l12">
              <h4 class="center">Wednesday</h4>
              {this.props.wednesdaysData.map((wednesday) => {
              return (
                <div>
                  <li><a href="#">{wednesday.firstName} {wednesday.lastName} </a><span class="removeFromWednesdayMobile">[x]</span><h6 class="workoutStartTime"><b>Start:</b> {wednesday.wednesdaysScheduleStart}</h6> <h6 class="workoutEndTime"><b>End:</b> {wednesday.wednesdaysScheduleEnd} <span class="removeFromWednesday">[x]</span></h6></li>
                  <div class="workoutDescription">Notes: {wednesday.wednesdayDescription}</div>
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