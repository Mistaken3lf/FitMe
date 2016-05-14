import React from 'react';
import moment from 'moment';
import Loading from '../../../common/components/Loading/Loading.js';
import NotAuthorized from '../../../common/components/NotAuthorized/NotAuthorized.js';
import SuspendedAccount from '../../../common/components/SuspendedAccount/SuspendedAccount.js';

TrainersSchedule = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('trainerSchedule');
    const myProfile = Meteor.subscribe('myProfile');

    return {
      loading: !handle.ready() && !myProfile.ready(),

      currentUser: Meteor.users.findOne({
        _id: Meteor.userId(),
      }),

      // Fetch trainers monday schedule
      mondaysSchedule: Meteor.users.find({
        mondayStatus: true,
        mondaysScheduleStart: {
          $exists: true,
        },

        mondaysScheduleEnd: {
          $exists: true,
        },
      }, {
        fields: {
          username: 1,
          mondaysScheduleStart: 1,
          mondaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          mondayDescription: 1,
          mondayStatus: 1,
        },
        sort: {
          mondaysScheduleStart: 1,
        },

      }).fetch(),

      // Fetch trainers tuesday schedule
      tuesdaysSchedule: Meteor.users.find({
        tuesdayStatus: true,
        tuesdaysScheduleStart: {
          $exists: true,
        },

        tuesdaysScheduleEnd: {
          $exists: true,
        },

      }, {
        fields: {
          username: 1,
          tuesdaysScheduleStart: 1,
          tuesdaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          tuesdayDescription: 1,
          tuesdayStatus: 1,
        },
        sort: {
          tuesdaysScheduleStart: 1,
        },
      }).fetch(),

      // Fetch trainers wednesday schedule
      wednesdaysSchedule: Meteor.users.find({
        wednesdayStatus: true,

        wednesdaysScheduleStart: {
          $exists: true,
        },

        wednesdaysScheduleEnd: {
          $exists: true,
        },
      }, {
        fields: {
          username: 1,
          wednesdaysScheduleStart: 1,
          wednesdaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          wednesdayDescription: 1,
          wednesdayStatus: 1,
        },
        sort: {
          wednesdaysScheduleStart: 1,
        },
      }).fetch(),

      // Fetch trainers thursday schedule
      thursdaysSchedule: Meteor.users.find({
        thursdayStatus: true,
        thursdaysScheduleStart: {
          $exists: true,
        },

        thursdaysScheduleEnd: {
          $exists: true,
        },
      }, {
        fields: {
          username: 1,
          thursdaysScheduleStart: 1,
          thursdaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          thursdayDescription: 1,
          thursdayStatus: 1,
        },
        sort: {
          thursdaysScheduleStart: 1,
        },
      }).fetch(),

      // Fetch trainers friday schedule
      fridaysSchedule: Meteor.users.find({
        fridayStatus: true,

        fridaysScheduleStart: {
          $exists: true,
        },

        fridaysScheduleEnd: {
          $exists: true,
        },
      }, {
        fields: {
          username: 1,
          fridaysScheduleStart: 1,
          fridaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          fridayDescription: 1,
          fridayStatus: 1,
        },
        sort: {
          fridaysScheduleStart: 1,
        },
      }).fetch(),

      // Fetch trainers saturday schedule
      saturdaysSchedule: Meteor.users.find({
        saturdayStatus: true,

        saturdaysScheduleStart: {
          $exists: true,
        },

        saturdaysScheduleEnd: {
          $exists: true,
        },
      }, {
        fields: {
          username: 1,
          saturdaysScheduleStart: 1,
          saturdaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          saturdayDescription: 1,
          saturdayStatus: 1,
        },
        sort: {
          saturdaysScheduleStart: 1,
        },
      }).fetch(),

      // Fetch trainers sunday schedule
      sundaysSchedule: Meteor.users.find({
        sundayStatus: true,

        sundaysScheduleStart: {
          $exists: true,
        },

        sundaysScheduleEnd: {
          $exists: true,
        },
      }, {
        fields: {
          username: 1,
          sundaysScheduleStart: 1,
          sundaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          sundayDescription: 1,
          sundayStatus: 1,
        },
        sort: {
          sundaysScheduleStart: 1,
        },
      }).fetch(),
    };
  },

  startOfWeek() {
    const startDay = moment().startOf('week').format('ddd. MMM Do');
    return startDay;
  },

  endOfWeek() {
    const endDay = moment().endOf('week').format('ddd. MMM Do');
    return endDay;
  },

  render() {
    if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (!Roles.userIsInRole(Meteor.userId(), 'trainer')) {
      return (
        <NotAuthorized />
      );
    } else if (this.data.loading) {
      return (
        <Loading />
      );
    } else if (this.data.currentUser.userStatus == 'suspended') {
      return (
        <SuspendedAccount />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), 'trainer')) {
      return (
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card grey lighten-4">
              <div className="col s12 m12 l12">
                <div className="card white z-depth-1">
                  <div className="blue card-title center-align white-text">MY SCHEDULE CARD</div>
                </div>
              </div>
              <div className="row">
                <h5 className="center"><b>WEEK OF:</b><br /> {this.startOfWeek()} - {this.endOfWeek()}</h5>
              </div>
              <div className="row">
                <MondaysSchedule mondaysData={this.data.mondaysSchedule} />
                <TuesdaysSchedule tuesdaysData={this.data.tuesdaysSchedule} />
              </div>
              <div className="row">
                <WednesdaysSchedule wednesdaysData={this.data.wednesdaysSchedule} />
                <ThursdaysSchedule thursdaysData={this.data.thursdaysSchedule} />
              </div>
              <div className="row">
                <FridaysSchedule fridaysData={this.data.fridaysSchedule} />
                <SaturdaysSchedule saturdaysData={this.data.saturdaysSchedule} />
              </div>
              <div className="row">
                <SundaysSchedule sundaysData={this.data.sundaysSchedule} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  },
});