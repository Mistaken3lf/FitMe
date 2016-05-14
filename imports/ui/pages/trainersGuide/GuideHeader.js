import React from 'react';

GuideHeader = React.createClass({
  render() {
    return (
      <div className="row center">
        <img className="responsive-img" src="/TrainerGuide/fitMeGuideHeader.png" />
        <br />
        <h4 className="blue-text">GUIDE</h4>
        <hr className="guideSeperator" />
      </div>
    );
  },
});