Template.layout.helpers({
	isLoggingIn: function() {
		return Meteor.loggingIn();
	},
	
	isNotInRole: function() {
		if(!Roles.userIsInRole('admin') && !Roles.userIsInRole('trainer') && !Roles.userIsInRole('client') && !Meteor.userId()) {
			return true;
		}
	}
});