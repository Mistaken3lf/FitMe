import React from 'react';

TrainerHome = React.createClass({
  render() {
    return(
      <div>
        <TrainerHomeHeader />
        <TrainerHomeWelcome />
        <TrainerHomeAdvertisement />
        <TrainerHomePlans />
        <TrainerHomeFinalLook />
        <TrainerHomeFooter />
      </div>
    );
  }
});