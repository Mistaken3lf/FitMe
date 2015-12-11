Meteor.methods({
  mondayStatus: function (status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          mondayStatus: status,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  },
  
  tuesdayStatus: function (status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          tuesdayStatus: status,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  },
  
  wednesdayStatus: function (status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          wednesdayStatus: status,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  },
  
  thursdayStatus: function (status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          thursdayStatus: status,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  },
  
  fridayStatus: function (status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          fridayStatus: status,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  },
  
  saturdayStatus: function (status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          saturdayStatus: status,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  },
  
  sundayStatus: function (status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          sundayStatus: status,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  },
  
});