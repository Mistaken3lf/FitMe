import React from 'react';

HowToVideos = React.createClass({
  componentDidMount() {
    $('.collapsible').collapsible({
      accordion : false,
    });
  },

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m12 l12">
            <ul className="collapsible" data-collapsible="accordion">
              <li>
                <div className="collapsible-header blue-text"><b>My Account</b></div>
                <div className="collapsible-body">
                  <div className="video-container">
                    <iframe className="extraPaddingVideo" width="560" height="350" src="https://www.youtube.com/embed/9ocWo0VOHzE" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header blue-text"><b>My Clients</b></div>
                <div className="collapsible-body">
                  <div className="video-container">
                    <iframe className="extraPaddingVideo" width="560" height="350" src="https://www.youtube.com/embed/r0voITQZkPI" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header blue-text"><b>Scheduling</b></div>
                <div className="collapsible-body">
                  <div className="video-container">
                    <iframe className="extraPaddingVideo" width="560" height="350" src="https://www.youtube.com/embed/_mAbMTKyLDs" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header blue-text"><b>Adding App Icon to your Phone</b></div>
                <div className="collapsible-body">
                  <div className="video-container">
                    <iframe className="extraPaddingVideo" width="560" height="350" src="https://www.youtube.com/embed/8JyNS7gSllU" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  },
});