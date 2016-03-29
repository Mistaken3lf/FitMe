import React from 'react';

AddExerciseButton = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <button className="btn-floating btn-large waves-effect blue right addClientButton"><i className="material-icons">add</i></button>
        </div>
      </div>
    );
  }
});