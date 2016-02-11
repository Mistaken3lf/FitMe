Template.addClient.onRendered(() => {
  //Pop up a datepicker when a date field is clicked on
  $('.datepicker').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
});

Template.addClient.events({
  //Capture create client form submission
  'submit form' (event) {
    //Prevent default form submission
    event.preventDefault();

    let clientData = {
      //Get the client data from the form
      username: $('[name=username]').val(),
      password: $('[name=password]').val(),
      email: $('[name=email]').val(),
      firstName: $('[name=firstName]').val(),
      lastName: $('[name=lastName]').val(),
      birthday: $('[name=birthday]').val(),
      address: $('[name=address]').val(),
      city: $('[name=city]').val(),
      state: $('[name=state]').val(),
      zip: $('[name=zip]').val(),
      homePhone: $('[name=homePhone]').val(),
      cellPhone: $('[name=cellPhone]').val(),
      workPhone: $('[name=workPhone]').val(),
      emergencyContact: $('[name=emergencyContact]').val(),
      bio: $('[name=bio]').val(),
      fitnessGoals: $('[name=fitnessGoals]').val()
    };

    //Call server method createClient with provided info
    Meteor.call("registerClient", clientData, (error, result) => {
      //Create client failed
      if (error) {
        //Popup a toast to display reason for error
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        //Go back to my current clients after adding one
        FlowRouter.go("/currentClients");

        if (result) {
          Bert.alert(result, 'danger', 'growl-top-right');

        } else {
          Bert.alert("Client Added", 'success', 'growl-top-right');
        }
      }
    });
  }
});

Template.addClient.helpers({
  //Check if the user is currently logging in
  isLoggingIn() {
    return Meteor.loggingIn();
  }
});
