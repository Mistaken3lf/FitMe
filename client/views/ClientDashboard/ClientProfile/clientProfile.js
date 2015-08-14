Template.clientProfile.onRendered(function () {
  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
});

Template.clientProfile.events({
  'keyup [name=clientProfileFirstName]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileFirstName", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileLastName]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileLastName", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileBirthday]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileBirthday", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileAddress]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileAddress", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileCity]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileCity", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileState]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileState", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileZip]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileZip", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileHomePhone]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileHomePhone", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileWorkPhone]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileWorkPhone", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileEmergencyContact]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileEmergencyContact", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientEmail]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientEmail", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileBio]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileBio", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },

  'keyup [name=clientProfileFitnessGoals]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileFitnessGoals", profileId, profileItem, function(error) {
      if(error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast")
      }
    });
  },
});
