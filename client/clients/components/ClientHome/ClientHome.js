import React from 'react';
import ClientHomeHeader from './ClientHomeHeader.js';
import ClientHomeWelcome from './ClientHomeWelcome.js';
import ClientHomeFooter from './ClientHomeFooter.js';

const ClientHome = () => (
  <div>
    <ClientHomeHeader />
    <ClientHomeWelcome />
    <ClientHomeFooter />
  </div>
);

export default ClientHome;