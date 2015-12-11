Meteor.methods({
  twoMonthPromo: function (trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(2, "months").format("MM/DD/YYYY");
      
      Meteor.users.update({
        _id: trainerId
      }, {
        $set: {
          clientLimit: 50,
          planType: "Two Month Promo",
          datePurchased: today,
          expiresOn: expires
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});