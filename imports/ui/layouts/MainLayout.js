import React from 'react';
import Alert from 'react-s-alert';
import Navigation from '../views/navigation/Navigation.js';
import {Grid} from 'react-bootstrap';


const MainLayout = ({content}) => (
  <div>
    <header>
      <Navigation />
    </header>
    <main>
      <Grid fluid={true}>
        {content}
      </Grid>
      <Alert stack={{limit: 3}} />
    </main>
  </div>
);

export default MainLayout;
