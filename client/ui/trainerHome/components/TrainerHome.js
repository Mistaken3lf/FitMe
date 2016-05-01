import React from 'react';
import TrainerHomeHeader from './TrainerHomeHeader.js';
import TrainerHomeWelcome from './TrainerHomeWelcome.js';
import TrainerHomeAdvertisement from './TrainerHomeAdvertisement.js';
import TrainerHomePlans from './TrainerHomePlans.js';
import TrainerHomeFinalLook from './TrainerHomeFinalLook.js';
import TrainerHomeFooter from './TrainerHomeFooter.js';

const TrainerHome = () => (
  <div>
    <TrainerHomeHeader />
    <TrainerHomeWelcome />
    <TrainerHomeAdvertisement />
    <TrainerHomePlans />
    <TrainerHomeFinalLook />
    <TrainerHomeFooter />
  </div>
);

export default TrainerHome;