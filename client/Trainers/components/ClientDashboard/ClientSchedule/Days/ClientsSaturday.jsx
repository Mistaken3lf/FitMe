ClientsSaturday = React.createClass({
  render() {
    return (
      <div className="col s12 m6 l6">
        <div className="card white">
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="center">Saturday</h4>
              <div className="col s12 m6 l6">
                <TimePicker />
              </div>
              <div className="col s12 m6 l6">
                <TimePicker />
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  Description:
                  <input type="text" ref="saturdayDescription" placeholder="Workout Description" />
                </div>
              </div>
              <div className="row center">
                <div className="col s12 m12 l12">
                  <div className="row">
                    <button className="btn red waves-effect cancelMonday">Cancel Appointment</button>
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