ClientsTuesday = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call("updateClientsSchedule", {
      fieldName, data, clientId
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, "danger");
      }
    });
  },

  cancelAppointment() {
    if ((this.refs.tuesdaysScheduleStart.value == "") || (this.refs.tuesdaysScheduleEnd.value == "") || (this.refs.tuesdayDescription.value == "")) {
      Bert.alert("You must fill in the entire appointment to cancel", "danger");
      return;
    } else {
      //Needed for sweet alerts
      let previousWindowKeyDown = window.onkeydown;

      //Sweet alert to confirm deletion of client
      swal({
        title: "Are You Sure?",
        text: "This will cancel your appointment for Tuesday and send the client an email letting them know you will not be able to make the appointment",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: true
      }, (isConfirm) => {
        window.onkeydown = previousWindowKeyDown;
        if (isConfirm) {
          this.refs.tuesdaysScheduleStart.value = "";
          this.refs.tuesdaysScheduleEnd.value = "";
          this.refs.tuesdayDescription.value = "";
          const clientId = FlowRouter.getParam('_id');
          Meteor.call("cancelTuesdaysAppointment", {clientId});
        } else {
          swal('Cancelled', 'Your appointment will not be canceled.', 'error');
        }
      });
    }
  },

  render() {
    return (
      <div className="col s12 m6 l6">
        <div className="card white">
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="center">Tuesday</h4>
              <div className="row">
              <div className="col s12 m6 l6">
                <label>Start Time: </label>
                <select className="browser-default" ref="tuesdaysScheduleStart" name="tuesdaysScheduleStart" defaultValue={this.props.scheduleData.tuesdaysScheduleStart} onChange={this.updateField}>
                  <option value=""></option>
                  <option value="12:00AM">12:00AM</option>
                  <option value="1:00AM">1:00AM</option>
                  <option value="2:00AM">2:00AM</option>
                  <option value="3:00AM">3:00AM</option>
                  <option value="4:00AM">4:00AM</option>
                  <option value="5:00AM">5:00AM</option>
                  <option value="6:00AM">6:00AM</option>
                  <option value="7:00AM">7:00AM</option>
                  <option value="8:00AM">8:00AM</option>
                  <option value="9:00AM">9:00AM</option>
                  <option value="10:00AM">10:00AM</option>
                  <option value="11:00AM">11:00AM</option>
                  <option value="12:00PM">12:00PM</option>
                  <option value="1:00PM">1:00PM</option>
                  <option value="2:00PM">2:00PM</option>
                  <option value="3:00PM">3:00PM</option>
                  <option value="4:00PM">4:00PM</option>
                  <option value="5:00PM">5:00PM</option>
                  <option value="6:00PM">6:00PM</option>
                  <option value="7:00PM">7:00PM</option>
                  <option value="8:00PM">8:00PM</option>
                  <option value="9:00PM">9:00PM</option>
                  <option value="10:00PM">10:00PM</option>
                  <option value="11:00PM">11:00PM</option>
                </select>
              </div>
              <div className="col s12 m6 l6">
                <label>End Time:</label>
                <select className="browser-default" ref="tuesdaysScheduleEnd" name="tuesdaysScheduleEnd" defaultValue={this.props.scheduleData.tuesdaysScheduleEnd} onChange={this.updateField}>
                  <option value=""></option>
                  <option value="12:00AM">12:00AM</option>
                  <option value="1:00AM">1:00AM</option>
                  <option value="2:00AM">2:00AM</option>
                  <option value="3:00AM">3:00AM</option>
                  <option value="4:00AM">4:00AM</option>
                  <option value="5:00AM">5:00AM</option>
                  <option value="6:00AM">6:00AM</option>
                  <option value="7:00AM">7:00AM</option>
                  <option value="8:00AM">8:00AM</option>
                  <option value="9:00AM">9:00AM</option>
                  <option value="10:00AM">10:00AM</option>
                  <option value="11:00AM">11:00AM</option>
                  <option value="12:00PM">12:00PM</option>
                  <option value="1:00PM">1:00PM</option>
                  <option value="2:00PM">2:00PM</option>
                  <option value="3:00PM">3:00PM</option>
                  <option value="4:00PM">4:00PM</option>
                  <option value="5:00PM">5:00PM</option>
                  <option value="6:00PM">6:00PM</option>
                  <option value="7:00PM">7:00PM</option>
                  <option value="8:00PM">8:00PM</option>
                  <option value="9:00PM">9:00PM</option>
                  <option value="10:00PM">10:00PM</option>
                  <option value="11:00PM">11:00PM</option>
                </select>
              </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  Description:
                  <input type="text" name="tuesdayDescription" ref="tuesdayDescription" placeholder="Workout Description" defaultValue={this.props.scheduleData.tuesdayDescription} onChange={this.updateField} />
                </div>
              </div>
              <div className="row center">
                <div className="col s12 m12 l12">
                  <div className="row">
                    <button className="btn red waves-effect" onClick={this.cancelAppointment}>Cancel Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});