 if (Accounts._resetPasswordToken) {
   Session.set('resetPassword', Accounts._resetPasswordToken);
   FlowRouter.go("reset-password" + Session.get("resetPassword"));
 }