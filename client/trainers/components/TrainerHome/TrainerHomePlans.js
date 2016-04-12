import React from 'react';

const TrainerHomePlans = () => (
  <section id="pricing">
    <div className="container">
      <br />
      <br />
      <h1 className="header center blue-text">Plans</h1>
      <div className="row center">
        <h5 className="header col s12 light">We offer three different packages to fit your needs.</h5>
      </div>
      <div className="divider blue"></div>
      <br />
      <br />
    </div>
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col s12 m3 l3">
            <div className="card white hoverable darken-1 z-depth-1">
              <div className="center-align card-content blue-text">
                <div className="divider"></div>
                <div className="section">
                  <h5 className="center-align">Free</h5>
                </div>
                <div className="divider"></div>
                <div className="section">
                  <h5 className="center-align">$0.00</h5>
                  <p className="center-align">1 Client Limit</p>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col s12 m3 l3">
            <div className="card blue hoverable darken-1 z-depth-1">
              <div className="center-align card-content white-text">
                <div className="divider"></div>
                <div className="section">
                  <h5 className="center-align">1 Month</h5>
                </div>
                <div className="divider"></div>
                <div className="section">
                  <h5 className="center-align">$15.00</h5>
                  <p className="center-align">50 Client Limit</p>
                  <p className="center-align">Technical Support</p>
                  <p className="center-align">1 Month Of Premium Access</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3 l3">
            <div className="card white hoverable darken-1 z-depth-1">
              <div className="center-align card-content blue-text">
                <div className="divider"></div>
                <div className="section">
                  <h5 className="center-align">6 Month</h5>
                </div>
                <div className="divider"></div>
                <div className="section">
                  <h5 className="center-align">$60.00</h5>
                  <p className="center-align">50 Client Limit</p>
                  <p className="center-align">Technical Support</p>
                  <p className="center-align">6 Months Of Premium Access</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3 l3">
            <div className="card blue hoverable darken-1 z-depth-1">
              <div className="center-align card-content white-text">
                <div className="divider"></div>
                <div className="section">
                  <h5 className="center-align">1 Year</h5>
                </div>
                <div className="divider"></div>
                <div className="section">
                  <h5 className="center-align">$99.00</h5>
                  <p className="center-align">50 Client Limit</p>
                  <p className="center-align">Technical Support</p>
                  <p className="center-align">1 Year Of Premium Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row center">
          <a className="btn blue white-text" href="/myAccount">Pick One</a>
        </div>
      </div>
    </div>
  </section>
 );

 export default TrainerHomePlans;