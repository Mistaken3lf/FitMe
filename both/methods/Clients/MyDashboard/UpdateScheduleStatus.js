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
      
      //Check if they are suspended and dont let them set status for monday
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
      //Update their mondays status
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
      
      //If client is suspended dont let them update their status
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
      //Update tuesdays status
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
      
      //Check if the client is suspended and prevent them from updating status
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
      //Update wednesdays status
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
      
      //Check if they are suspended and prevent them from updating status
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
      //Update thursdays status
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
      
      //Check if the client is suspended and prevent them from changing status
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
      //Update fridays status
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
      
      //Check if the client is suspended and dont let them update status
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
      //Update saturdays status
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
      
      
      //Check if the client is suspended and dont let them update status
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      
      //Update sundays status
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