FridaysSchedule = React.createClass({
  render() {
    return (
      <div class="col s12 m6 l6">
        <div class="card white trainerSchedule">
          <div class="row">
            <div class="col s12 m12 l12">
              <h4 class="center">Friday</h4>
              {this.props.fridaysData.map((friday) => {
              return (
                <div>
                  <li><a href="#">{friday.firstName} {friday.lastName} </a><span class="removeFromFridayMobile">[x]</span><h6 class="workoutStartTime"><b>Start:</b> {friday.fridaysScheduleStart}</h6> <h6 class="workoutEndTime"><b>End:</b> {friday.fridaysScheduleEnd} <span class="removeFromFriday">[x]</span></h6></li>
                  <div class="workoutDescription">Notes: {friday.fridayDescription}</div>
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