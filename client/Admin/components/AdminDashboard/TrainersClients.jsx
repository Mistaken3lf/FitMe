TrainersClients = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const trainerId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("trainersClients", trainerId);

    return {
      loading: !handle.ready(),

      trainersClients: Meteor.users.find({
        createdBy: trainerId
      }).fetch()
    };
  },

  suspendClient(id) {
    //Suspend user clicked on
    Meteor.call("suspendClientAdmin", id);
  },

  deleteClient(id) {
    //Find client clicked on
    const curUser = Meteor.users.findOne({
      _id: id
    });

    //Needed for sweet alerts
    let previousWindowKeyDown = window.onkeydown;

    //Popup sweet alert to confirm delete
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover" + " " + curUser.username,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, remove user!",
      closeOnConfirm: false
    }, (isConfirm) => {
      window.onkeydown = previousWindowKeyDown;
      if (isConfirm) {
        swal('Deleted!', 'Client has been deleted.', 'success');
        //Call server function to delete the client clicked on
        Meteor.call("removeClient", curUser._id);
      } else {
        swal('Cancelled', 'Your client is safe now :)', 'error');
      }
    });
  },

  render() {
    if(this.data.loading) {
      return (
        <Loading />
      );
    } else {
      return (
        <div className="card white">
          <div className="row">
            <div className="col s12 m12 l12">
              <div className="card">
                <div className="black card-title center-align white-text">CURRENT CLIENTS</div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <div className="row">
                    <div className="col s12 m12 l12">
                      <table className="responsive-table">
                        <thead>
                          <tr>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Status</th>
                            <th>Suspend</th>
                            <th>Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.data.trainersClients.map((client) => {
                          return (
                            <tr key={client._id}>
                              <td>{client.username}</td>
                              <td>{client.firstName}</td>
                              <td>{client.lastName}</td>
                              <td>{client.userStatus}</td>
                              <td>
                                <button className="btn-floating amber waves-effect" onClick={this.suspendClient.bind(null, client._id)}><i className="material-icons">https</i></button>
                              </td>
                              <td>
                                <button className="btn-floating red waves-effect" onClick={this.deleteClient.bind(null, client._id)}><i className="material-icons">remove</i></button>
                              </td>
                            </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
});