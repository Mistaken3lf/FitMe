Welcome = React.createClass({
  render() {
    return (
      <section id="about">
        <div className="container">
          <br />
          <br />
          <h1 className="header center blue-text">Welcome To FitMe</h1>
          <div className="row center">
            <h5 className="header col s12 light">A new and intuitive way to manage workouts for your clients</h5>
          </div>
          <div className="divider blue"></div>
          <br />
          <br />
        </div>
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center blue-text"><i className="large mdi-action-history"></i></h2>
                  <h5 className="center">Save Time</h5>
                  <p className="light">Tired of wasting paper and printing out workouts for your clients? With FitMe that is all unnecessary. Your workouts are all now stored digitally and you can access them from anywhere.</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center blue-text"><i className="large mdi-hardware-keyboard-alt"></i></h2>
                  <h5 className="center">User Friendly</h5>
                  <p className="light">A very easy to use interface for anyone. Use it on a computer, tablet, or phone. Designed to work on multiple platforms FitMe is extremely versatile.</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center blue-text"><i className="large mdi-maps-local-atm"></i></h2>
                  <h5 className="center">Save Money</h5>
                  <p className="light">As a trainer, printing out workouts every day is costly with both the cost of paper and the time spent creating and printing everyones workouts. You are sure to save both time and money with FitMe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});