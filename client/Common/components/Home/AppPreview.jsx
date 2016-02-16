AppPreview = React.createClass({
  componentDidMount() {
    $('.slider').slider({
      full_width: true
    });
  },

  render() {
    return (
      <div>
        <section id="about">
          <div className="container">
            <br />
            <br />
            <h1 className="header center blue-text">What's Inside?</h1>
            <div className="row center">
              <h5 className="header col s12 light">Preview the app and see what FitMe can offer you!</h5>
            </div>
            <div className="divider blue"></div>
            <br />
            <br />
          </div>
        </section>
        <section id="slider">
          <div className="slider">
            <ul className="slides">
              <li>
                <img src="/home/slider-clientList.jpg" />
                <div className="caption left-align">
                  <h3>CLIENT LIST</h3>
                  <h5 className="dark white-text">View and Manage your clients.</h5>
                </div>
              </li>
              <li>
                <img src="/home/slider-schedule.jpg" />
                <div className="caption right-align">
                  <h3>Workout Schedule</h3>
                  <h5 className="light white-text">Never miss a session.</h5>
                  <h5 className="light grey-text text-lighten-3">Track times and days for each client.</h5>
                </div>
              </li>
              <li>
                <img src="/home/slider-cardio.jpg" />
                <div className="caption left-align">
                  <h3>Cardio Tracking</h3>
                  <h5 className="light white-text">You do the running, we do the tracking!</h5>
                </div>
              </li>
              <li>
                <img src="/home/slider-workout-1.jpg" />
                <div className="caption right-align">
                  <h3>WORKOUT</h3>
                  <h5 className="light white-text">If you build it, they will come!</h5>
                  <h5 className="dark white-text">Build individualized workout routines for your clients</h5>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
});