import React from 'react';
import Alert from 'react-s-alert';

ClientsTuesday = React.createClass({
  updateField(e) {
    const fieldName = e.target.name;
    const data = e.target.value;
    const clientId = FlowRouter.getParam('_id');

    Meteor.call("updateClientsSchedule", {
      fieldName, data, clientId
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
    });
  },

  cancelAppointment() {
    if ((this.refs.tuesdaysScheduleStart.value == "") || (this.refs.tuesdaysScheduleEnd.value == "") || (this.refs.tuesdayDescription.value == "")) {
      Alert.error("You must fill out the entire appointment to cancel!", {
        position: 'top-right',
        effect: 'jelly'
      });
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
          Meteor.call("cancelTuesdaysAppointment", {
            clientId
          });
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
                  <option value="12:15AM">12:15AM</option>
                  <option value="12:30AM">12:30AM</option>
                  <option value="12:45AM">12:45AM</option>
                  <option value="1:00AM">1:00AM</option>
                  <option value="1:15AM">1:15AM</option>
                  <option value="1:30AM">1:30AM</option>
                  <option value="1:45AM">1:45AM</option>
                  <option value="2:00AM">2:00AM</option>
                  <option value="2:15AM">2:15AM</option>
                  <option value="2:30AM">2:30AM</option>
                  <option value="2:45AM">2:45AM</option>
                  <option value="3:00AM">3:00AM</option>
                  <option value="3:15AM">3:15AM</option>
                  <option value="3:30AM">3:30AM</option>
                  <option value="3:45AM">3:45AM</option>
                  <option value="4:00AM">4:00AM</option>
                  <option value="4:15AM">4:15AM</option>
                  <option value="4:30AM">4:30AM</option>
                  <option value="4:45AM">4:45AM</option>
                  <option value="5:00AM">5:00AM</option>
                  <option value="5:15AM">5:15AM</option>
                  <option value="5:30AM">5:30AM</option>
                  <option value="5:45AM">5:45AM</option>
                  <option value="6:00AM">6:00AM</option>
                  <option value="6:15AM">6:15AM</option>
                  <option value="6:30AM">6:30AM</option>
                  <option value="6:45AM">6:45AM</option>
                  <option value="7:00AM">7:00AM</option>
                  <option value="7:15AM">7:15AM</option>
                  <option value="7:30AM">7:30AM</option>
                  <option value="7:45AM">7:45AM</option>
                  <option value="8:00AM">8:00AM</option>
                  <option value="8:15AM">8:15AM</option>
                  <option value="8:30AM">8:30AM</option>
                  <option value="8:45AM">8:45AM</option>
                  <option value="9:00AM">9:00AM</option>
                  <option value="9:15AM">9:15AM</option>
                  <option value="9:30AM">9:30AM</option>
                  <option value="9:45AM">9:45AM</option>
                  <option value="10:00AM">10:00AM</option>
                  <option value="10:15AM">10:15AM</option>
                  <option value="10:30AM">10:30AM</option>
                  <option value="10:45AM">10:45AM</option>
                  <option value="11:00AM">11:00AM</option>
                  <option value="11:15AM">11:15AM</option>
                  <option value="11:30AM">11:30AM</option>
                  <option value="11:45AM">11:45AM</option>
                  <option value="12:00PM">12:00PM</option>
                  <option value="12:15PM">12:15PM</option>
                  <option value="12:30PM">12:30PM</option>
                  <option value="12:45PM">12:45PM</option>
                  <option value="1:00PM">1:00PM</option>
                  <option value="1:15PM">1:15PM</option>
                  <option value="1:30PM">1:30PM</option>
                  <option value="1:45PM">1:45PM</option>
                  <option value="2:00PM">2:00PM</option>
                  <option value="2:15PM">2:15PM</option>
                  <option value="2:30PM">2:30PM</option>
                  <option value="2:45PM">2:45PM</option>
                  <option value="3:00PM">3:00PM</option>
                  <option value="3:15PM">3:15PM</option>
                  <option value="3:30PM">3:30PM</option>
                  <option value="3:45PM">3:45PM</option>
                  <option value="4:00PM">4:00PM</option>
                  <option value="4:15PM">4:15PM</option>
                  <option value="4:30PM">4:30PM</option>
                  <option value="4:45PM">4:45PM</option>
                  <option value="5:00PM">5:00PM</option>
                  <option value="5:15PM">5:15PM</option>
                  <option value="5:30PM">5:30PM</option>
                  <option value="5:45PM">5:45PM</option>
                  <option value="6:00PM">6:00PM</option>
                  <option value="6:15PM">6:15PM</option>
                  <option value="6:30PM">6:30PM</option>
                  <option value="6:45PM">6:45PM</option>
                  <option value="7:00PM">7:00PM</option>
                  <option value="7:15PM">7:15PM</option>
                  <option value="7:30PM">7:30PM</option>
                  <option value="7:45PM">7:45PM</option>
                  <option value="8:00PM">8:00PM</option>
                  <option value="8:15PM">8:15PM</option>
                  <option value="8:30PM">8:30PM</option>
                  <option value="8:45PM">8:45PM</option>
                  <option value="9:00PM">9:00PM</option>
                  <option value="9:15PM">9:15PM</option>
                  <option value="9:30PM">9:30PM</option>
                  <option value="9:45PM">9:45PM</option>
                  <option value="10:00PM">10:00PM</option>
                  <option value="10:15PM">10:15PM</option>
                  <option value="10:30PM">10:30PM</option>
                  <option value="10:45PM">10:45PM</option>
                  <option value="11:00PM">11:00PM</option>
                  <option value="11:15PM">11:15PM</option>
                  <option value="11:30PM">11:30PM</option>
                  <option value="11:45PM">11:45PM</option>
                </select>
              </div>
              <div className="col s12 m6 l6">
                <label>End Time:</label>
                <select className="browser-default" ref="tuesdaysScheduleEnd" name="tuesdaysScheduleEnd" defaultValue={this.props.scheduleData.tuesdaysScheduleEnd} onChange={this.updateField}>
                  <option value=""></option>
                  <option value="12:00AM">12:00AM</option>
                  <option value="12:15AM">12:15AM</option>
                  <option value="12:30AM">12:30AM</option>
                  <option value="12:45AM">12:45AM</option>
                  <option value="1:00AM">1:00AM</option>
                  <option value="1:15AM">1:15AM</option>
                  <option value="1:30AM">1:30AM</option>
                  <option value="1:45AM">1:45AM</option>
                  <option value="2:00AM">2:00AM</option>
                  <option value="2:15AM">2:15AM</option>
                  <option value="2:30AM">2:30AM</option>
                  <option value="2:45AM">2:45AM</option>
                  <option value="3:00AM">3:00AM</option>
                  <option value="3:15AM">3:15AM</option>
                  <option value="3:30AM">3:30AM</option>
                  <option value="3:45AM">3:45AM</option>
                  <option value="4:00AM">4:00AM</option>
                  <option value="4:15AM">4:15AM</option>
                  <option value="4:30AM">4:30AM</option>
                  <option value="4:45AM">4:45AM</option>
                  <option value="5:00AM">5:00AM</option>
                  <option value="5:15AM">5:15AM</option>
                  <option value="5:30AM">5:30AM</option>
                  <option value="5:45AM">5:45AM</option>
                  <option value="6:00AM">6:00AM</option>
                  <option value="6:15AM">6:15AM</option>
                  <option value="6:30AM">6:30AM</option>
                  <option value="6:45AM">6:45AM</option>
                  <option value="7:00AM">7:00AM</option>
                  <option value="7:15AM">7:15AM</option>
                  <option value="7:30AM">7:30AM</option>
                  <option value="7:45AM">7:45AM</option>
                  <option value="8:00AM">8:00AM</option>
                  <option value="8:15AM">8:15AM</option>
                  <option value="8:30AM">8:30AM</option>
                  <option value="8:45AM">8:45AM</option>
                  <option value="9:00AM">9:00AM</option>
                  <option value="9:15AM">9:15AM</option>
                  <option value="9:30AM">9:30AM</option>
                  <option value="9:45AM">9:45AM</option>
                  <option value="10:00AM">10:00AM</option>
                  <option value="10:15AM">10:15AM</option>
                  <option value="10:30AM">10:30AM</option>
                  <option value="10:45AM">10:45AM</option>
                  <option value="11:00AM">11:00AM</option>
                  <option value="11:15AM">11:15AM</option>
                  <option value="11:30AM">11:30AM</option>
                  <option value="11:45AM">11:45AM</option>
                  <option value="12:00PM">12:00PM</option>
                  <option value="12:15PM">12:15PM</option>
                  <option value="12:30PM">12:30PM</option>
                  <option value="12:45PM">12:45PM</option>
                  <option value="1:00PM">1:00PM</option>
                  <option value="1:15PM">1:15PM</option>
                  <option value="1:30PM">1:30PM</option>
                  <option value="1:45PM">1:45PM</option>
                  <option value="2:00PM">2:00PM</option>
                  <option value="2:15PM">2:15PM</option>
                  <option value="2:30PM">2:30PM</option>
                  <option value="2:45PM">2:45PM</option>
                  <option value="3:00PM">3:00PM</option>
                  <option value="3:15PM">3:15PM</option>
                  <option value="3:30PM">3:30PM</option>
                  <option value="3:45PM">3:45PM</option>
                  <option value="4:00PM">4:00PM</option>
                  <option value="4:15PM">4:15PM</option>
                  <option value="4:30PM">4:30PM</option>
                  <option value="4:45PM">4:45PM</option>
                  <option value="5:00PM">5:00PM</option>
                  <option value="5:15PM">5:15PM</option>
                  <option value="5:30PM">5:30PM</option>
                  <option value="5:45PM">5:45PM</option>
                  <option value="6:00PM">6:00PM</option>
                  <option value="6:15PM">6:15PM</option>
                  <option value="6:30PM">6:30PM</option>
                  <option value="6:45PM">6:45PM</option>
                  <option value="7:00PM">7:00PM</option>
                  <option value="7:15PM">7:15PM</option>
                  <option value="7:30PM">7:30PM</option>
                  <option value="7:45PM">7:45PM</option>
                  <option value="8:00PM">8:00PM</option>
                  <option value="8:15PM">8:15PM</option>
                  <option value="8:30PM">8:30PM</option>
                  <option value="8:45PM">8:45PM</option>
                  <option value="9:00PM">9:00PM</option>
                  <option value="9:15PM">9:15PM</option>
                  <option value="9:30PM">9:30PM</option>
                  <option value="9:45PM">9:45PM</option>
                  <option value="10:00PM">10:00PM</option>
                  <option value="10:15PM">10:15PM</option>
                  <option value="10:30PM">10:30PM</option>
                  <option value="10:45PM">10:45PM</option>
                  <option value="11:00PM">11:00PM</option>
                  <option value="11:15PM">11:15PM</option>
                  <option value="11:30PM">11:30PM</option>
                  <option value="11:45PM">11:45PM</option>
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