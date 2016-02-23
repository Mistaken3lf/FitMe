MondaysSchedule = React.createClass({
  render() {
    return (
      <div class="col s12 m6 l6">
        <div class="card white trainerSchedule">
          <div class="row">
            <div class="col s12 m12 l12">
              <h4 class="center">Monday</h4>
              {this.props.mondaysData.map((monday) => {
              return (
                <div>
                  <li><a href="#">{monday.firstName} {monday.lastName} </a><span class="removeFromMondayMobile">[x]</span><h6 class="workoutStartTime"><b>Start:</b> {monday.mondaysScheduleStart}</h6> <h6 class="workoutEndTime"><b>End:</b> {monday.mondaysScheduleEnd} <span class="removeFromMonday">[x]</span></h6></li>
                  <div class="workoutDescription">Notes: {monday.mondayDescription}</div>
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