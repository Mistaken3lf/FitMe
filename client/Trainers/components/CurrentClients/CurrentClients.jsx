CurrentClients = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const currentClients = Meteor.subscribe("currentClients");
    const clientData = Meteor.subscribe("myProfile");

    return {
      loading: !currentClients.ready() || !clientData.ready(),
      currentClients: Meteor.users.find({
        createdBy: Meteor.userId()
      }).fetch(),

      currentUser: Meteor.users.findOne({
        _id: Meteor.userId()
      })
    }
  },

  addClient() {
    //Find client to delete
    const curTrainer = Meteor.users.findOne({
      _id: Meteor.userId()
    });

    //Dont let trainer add clients if they are suspended
    if (curTrainer.userStatus == "suspended") {
      Bert.alert("Sorry, your account has been suspended", "danger", "growl-top-right");
      return;
    } else {
      FlowRouter.go("/addClient");
    }
  },

  render() {
    if(this.data.loading) {
      return (
        <Loading />
      );
    } else if(Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if(this.data.currentUser.userStatus == "suspended") {
      return (
        <SuspendedAccount />
      );
    } else if(Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
       <div className="row">
        <div className="col s12">
          <div className="card z-depth-1 grey lighten-4">
            <div className="col s12 m12 l12">
              <div className="card">
                <div className="blue card-title center-align white-text">CURRENT CLIENTS</div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="card white z-depth-1 spacing">
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <ClientTable trainersClients={this.data.currentClients}/>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn-floating btn-large waves-effect blue right addClientButton" onClick={this.addClient}><i className="material-icons">add</i></button>
            </div>
          </div>
        </div>
      </div>
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
});