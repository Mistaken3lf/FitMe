import React from 'react';
import Alert from 'react-s-alert';

Layout = React.createClass({
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <div className="layoutContainer">
            {this.props.content}
          </div>
          <Alert stack={{limit: 3}} />
        </main>
      </div>
    );
  }
});