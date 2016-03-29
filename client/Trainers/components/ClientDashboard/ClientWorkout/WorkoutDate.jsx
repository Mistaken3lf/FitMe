import React from 'react';

WorkoutDate = React.createClass({
   updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call("updateClientsWorkout", {
      fieldName, data, clientId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, "danger");
      }
    });
  },

  render() {
    return (
      <div className="row">
        <div className="col s12 m3 l3">
          <span className="black-text workoutHeadings">Date:</span>
          <input type="date" name="workoutDate" defaultValue={this.props.workoutData.workoutDate} onChange={this.updateField} placeholder="Ex. 05-29-1990" />
        </div>
      </div>
    );
  }
});