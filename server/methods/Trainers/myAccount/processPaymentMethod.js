let Stripe = StripeAPI(Meteor.settings.private.stripe);

Meteor.methods({
  processPayment(charge) {
    let handleCharge = Meteor.wrapAsync(Stripe.charges.create, Stripe.charges),
      payment = handleCharge(charge);
      
    //Update the user paid status  
    Meteor.users.update({
      _id: this.userId
    }, {
      $set: {
        hasPaid: true
      }
    });

    return payment;
  }
});