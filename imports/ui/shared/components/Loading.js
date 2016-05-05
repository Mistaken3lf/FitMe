import React from 'react';

const styles = {
  spinnerStyle: {
    marginTop: 300,
  },
};

const Loading = () => (
  <div className="row">
    <div className="col s12 m12 l12 center" style={styles.spinnerStyle}>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
