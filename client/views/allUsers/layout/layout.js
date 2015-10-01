Template.layout.helpers({
	isLoggedOut: function() {
		if(!Meteor.userId()) {
			return true;
		}
	}
});