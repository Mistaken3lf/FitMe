TrainersSchedule = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("trainerSchedule");

    return {
      loading: !handle.ready(),

      //Fetch trainers monday schedule
      mondaysSchedule: Meteor.users.find({
        mondayStatus: true,
        mondaysScheduleStart: {
          $exists: true
        },

        mondaysScheduleEnd: {
          $exists: true
        }
      }, {
        fields: {
          username: 1,
          mondaysScheduleStart: 1,
          mondaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          mondayDescription: 1,
          mondayStatus: 1
        },
        sort: {
          mondaysScheduleStart: 1
        }

      }).fetch(),

      //Fetch trainers tuesday schedule
      tuesdaysSchedule: Meteor.users.find({
        tuesdayStatus: true,
        tuesdaysScheduleStart: {
          $exists: true
        },

        tuesdaysScheduleEnd: {
          $exists: true
        }

      }, {
        fields: {
          username: 1,
          tuesdaysScheduleStart: 1,
          tuesdaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          tuesdayDescription: 1,
          tuesdayStatus: 1
        },
        sort: {
          tuesdaysScheduleStart: 1
        }
      }).fetch(),

      //Fetch trainers wednesday schedule
      wednesdaysSchedule: Meteor.users.find({
        wednesdayStatus: true,

        wednesdaysScheduleStart: {
          $exists: true
        },

        wednesdaysScheduleEnd: {
          $exists: true
        }
      }, {
        fields: {
          username: 1,
          wednesdaysScheduleStart: 1,
          wednesdaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          wednesdayDescription: 1,
          wednesdayStatus: 1
        },
        sort: {
          wednesdaysScheduleStart: 1
        }
      }).fetch(),

      //Fetch trainers thursday schedule
      thursdaysSchedule: Meteor.users.find({
        thursdayStatus: true,
        thursdaysScheduleStart: {
          $exists: true
        },

        thursdaysScheduleEnd: {
          $exists: true
        }
      }, {
        fields: {
          username: 1,
          thursdaysScheduleStart: 1,
          thursdaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          thursdayDescription: 1,
          thursdayStatus: 1
        },
        sort: {
          thursdaysScheduleStart: 1
        }
      }).fetch(),

      //Fetch trainers friday schedule
      fridaysSchedule: Meteor.users.find({
        fridayStatus: true,

        fridaysScheduleStart: {
          $exists: true
        },

        fridaysScheduleEnd: {
          $exists: true
        }
      }, {
        fields: {
          username: 1,
          fridaysScheduleStart: 1,
          fridaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          fridayDescription: 1,
          fridayStatus: 1
        },
        sort: {
          fridaysScheduleStart: 1
        }
      }).fetch(),

      //Fetch trainers saturday schedule
      saturdaysSchedule: Meteor.users.find({
        saturdayStatus: true,

        saturdaysScheduleStart: {
          $exists: true
        },

        saturdaysScheduleEnd: {
          $exists: true
        }
      }, {
        fields: {
          username: 1,
          saturdaysScheduleStart: 1,
          saturdaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          saturdayDescription: 1,
          saturdayStatus: 1
        },
        sort: {
          saturdaysScheduleStart: 1
        }
      }).fetch(),

      //Fetch trainers sunday schedule
      sundaysSchedule: Meteor.users.find({
        sundayStatus: true,

        sundaysScheduleStart: {
          $exists: true
        },

        sundaysScheduleEnd: {
          $exists: true
        }
      }, {
        fields: {
          username: 1,
          sundaysScheduleStart: 1,
          sundaysScheduleEnd: 1,
          firstName: 1,
          lastName: 1,
          sundayDescription: 1,
          sundayStatus: 1
        },
        sort: {
          sundaysScheduleStart: 1
        }
      }).fetch()
    };
  },

  render() {
    if (this.data.loading) {
      return (
        <Loading />
      );
    } else if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="card grey lighten-4">
              <div class="col s12 m12 l12">
                <div class="card white z-depth-1">
                  <div class="blue card-title center-align white-text">MY SCHEDULE CARD</div>
                </div>
              </div>
              <div class="row">
                <h5 class="center"><b>WEEK OF:</b><br /> Start - End</h5>
              </div>
              <div class="row">
                <MondaysSchedule mondaysData={this.data.mondaysSchedule} />
                <TuesdaysSchedule tuesdaysData={this.data.tuesdaysSchedule} />
              </div>
              <div class="row">
                <WednesdaysSchedule wednesdaysData={this.data.wednesdaysSchedule} />
                <ThursdaysSchedule thursdaysData={this.data.thursdaysSchedule} />
              </div>
              <div class="row">
                <FridaysSchedule fridaysData={this.data.fridaysSchedule} />
                <SaturdaysSchedule saturdaysData={this.data.saturdaysSchedule} />
              </div>
              <div class="row">
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
  }
});