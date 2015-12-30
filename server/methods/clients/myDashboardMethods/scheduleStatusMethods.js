Meteor.methods({
  mondayStatus(status) {
    new SimpleSchema({
        status: {
          type: Boolean
        }
      }).validate({
        status
      });
      
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
    new SimpleSchema({
        status: {
          type: Boolean
        }
      }).validate({
        status
      });
    
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
    new SimpleSchema({
        status: {
          type: Boolean
        }
      }).validate({
        status
      });
    
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
    new SimpleSchema({
        status: {
          type: Boolean
        }
      }).validate({
        status
      });
    
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
    new SimpleSchema({
        status: {
          type: Boolean
        }
      }).validate({
        status
      });
    
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
    new SimpleSchema({
        status: {
          type: Boolean
        }
      }).validate({
        status
      });
    
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
    new SimpleSchema({
        status: {
          type: Boolean
        }
      }).validate({
        status
      });
    
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
  }
  
});