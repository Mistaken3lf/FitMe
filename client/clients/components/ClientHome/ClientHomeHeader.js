import React from 'react';

const styles = {
  backgroundHeader: {
    backgroundImage: "url('/Home/bg-workout.jpg')"
  }
};

const ClientHomeHeader = () => (
  <div>
    <section id="top" className="responsive-img" style={styles.backgroundHeader}>
      <div className="container">
        <br />
        <br />
        <br />
        <div className="col l6 s12 center-align">
          <img className="responsive-img logo-img" src="/Home/FitMe-text-logo3.png" />
        </div>
        <br />
        <br />
        <div className="row center-align">
          <h5 className="header col s12 light white-text">TRAINING | DEDICATION | RESULTS</h5>
        </div>
        <br />
        <br />
      </div>
    </section>
  </div>
);

export default ClientHomeHeader;