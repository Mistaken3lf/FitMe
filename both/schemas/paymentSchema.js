PaymentSchema = {};

PaymentSchema.payment= new SimpleSchema({
  cardNumber: {
    type: String
  },
  
  expirationMonth: {
    type: String
  },
  
  expirationYear: {
    type: String
  },
  
  cvcNumber: {
    type: String
  }
});