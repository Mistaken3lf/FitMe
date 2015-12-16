Meteor.startup(function () {
  let stripeKey = Meteor.settings.public.stripe.testPublishableKey;
  Stripe.setPublishableKey(stripeKey);

  var handler = StripeCheckout.configure({
    key: stripeKey,
    token: function (token) {}
  });
});