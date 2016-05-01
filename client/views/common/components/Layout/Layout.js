import React from 'react';
import Alert from 'react-s-alert';
import Navigation from '../../containers/navigation.js';

const Layout = ({content}) => (
  <div>
    <header>
      <Navigation />
    </header>
    <main>
      <div className="container-fluid">
        {content}
      </div>
      <Alert stack={{limit: 3}} />
    </main>
  </div>
);

export default Layout;