let Stripe = StripeAPI(Meteor.settings.private.stripe);

Meteor.methods({
  processPayment(charge) {
    let handleCharge = Meteor.wrapAsync(Stripe.charges.create, Stripe.charges),
      payment = handleCharge(charge);

    return payment;
  }
});