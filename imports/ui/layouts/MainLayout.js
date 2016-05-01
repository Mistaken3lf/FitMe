import React from 'react';
import Alert from 'react-s-alert';
import Navigation from '../../navigation/containers/navigation.js';

const MainLayout = ({content}) => (
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

export default MainLayout;