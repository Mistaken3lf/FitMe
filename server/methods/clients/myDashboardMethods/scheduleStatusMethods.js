Meteor.methods({
  mondayStatus(status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId
      });
      
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
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
  
  tuesdayStatus(status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId
      });
      
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
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
  
  wednesdayStatus(status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId
      });
      
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
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
  
  thursdayStatus(status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId
      });
      
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
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
  
  fridayStatus(status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId
      });
      
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
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
  
  saturdayStatus(status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId
      });
      
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
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
  
  sundayStatus(status) {
    if (Roles.userIsInRole(this.userId, "client")) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId
      });
      
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
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