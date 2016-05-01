import React from 'react';

export default class AppPreview extends React.Component {
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
                <img src="/Home/car-client.jpg" />
                <div className="caption right-align">
                  <h3>CLIENT LIST</h3>
                  <h5 className="dark white-text">View and Manage your clients.</h5>
                </div>
              </li>
              <li>
                <img src="/Home/car-sched.jpg" />
                <div className="caption right-align">
                  <h3>Workout Schedule</h3>
                  <h5 className="light white-text">Never miss a session.</h5>
                  <h5 className="light grey-text text-lighten-3">Track times and days for each client.</h5>
                </div>
              </li>
              <li>
                <img src="/Home/car-cardio.jpg" />
                <div className="caption right-align">
                  <h3>Cardio Tracking</h3>
                  <h5 className="light white-text">You do the running, we do the tracking!</h5>
                </div>
              </li>
              <li>
                <img src="/Home/car-workout.jpg" />
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
      </div>
    );
  }
}