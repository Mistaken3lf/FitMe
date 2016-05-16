import React, {PropTypes} from 'react';
import Alert from 'react-s-alert';
import Navigation from '../pages/navigation/Navigation.js';
import {Grid} from 'react-bootstrap';

MainLayout.propTypes = {
  content: PropTypes.object.isRequired,
};

const MainLayout = ({content}) => (
  <div>
    <header>
      <Navigation />
    </header>
    <main>
      <Grid fluid>
        {content}
      </Grid>
      <Alert stack={{limit: 3}} />
    </main>
  </div>
);

export default MainLayout;
