////////////////////////////////////////////////////////////////////////////////
Template.addClient.onRendered(function () {
  //Pop up a datepicker when a date field is clicked on
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 225,
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

////////////////////////////////////////////////////////////////////////////////
Template.addClient.events({
  //Capture create client form submission
  'submit form': function (event) {
    //Prevent default form submission
    event.preventDefault();

    //Get the client data from the form
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();
    var firstName = $('[name=firstName]').val();
    var lastName = $('[name=lastName]').val();
    var birthday = $('[name=birthday]').val();
    var address = $('[name=address]').val();
    var city = $('[name=city]').val();
    var state = $('[name=state]').val();
    var zip = $('[name=zip]').val();
    var homePhone = $('[name=homePhone]').val();
    var cellPhone = $('[name=cellPhone]').val();
    var workPhone = $('[name=workPhone]').val();
    var emergencyContact = $('[name=emergencyContact]').val();
    var bio = $('[name=bio]').val();
    var fitnessGoals = $('[name=fitnessGoals]').val();
    
    //Call server method createClient with provided info
    Meteor.call("registerClient", username, password, email, firstName, lastName, birthday, address, city, state, zip, homePhone, cellPhone, workPhone, emergencyContact, bio, fitnessGoals, function (error, result) {
      //Create client failed
      if (error) {
        //Popup a toast to display reason for error
        Materialize.toast(error.reason, 4000, "centerToast");
      } else {
        //Empty out all form inputs
        username = $('[name=username]').val('');
        password = $('[name=password]').val('');
        email = $('[name=email]').val('');
        firstName = $('[name=firstName]').val('');
        lastName = $('[name=lastName]').val('');
        birthday = $('[name=birthday]').val('');
        address = $('[name=address]').val('');
        city = $('[name=city]').val('');
        state = $('[name=state]').val('');
        zip = $('[name=zip]').val('');
        homePhone = $('[name=homePhone]').val('');
        cellPhone = $('[name=cellPhone]').val('');
        workPhone = $('[name=firstName]').val('');
        emergencyContact = $('[name=emergencyContact]').val('');
        bio = $('[name=bio]').val('');
        fitnessGoals = $('[name=fitnessGoals]').val('');

        //Go back to my current clients after adding one
        FlowRouter.go("/currentClients");
        Materialize.toast(result, 4000, "centerToast");
      }
    });
  }
});
//////////////////////////////////////////////////////////////////////////////