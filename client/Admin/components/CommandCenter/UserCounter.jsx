UserCounter = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col s12 m4 l4">
          <h5 className="green-text center-align">TOTAL TRAINERS: {this.props.totalTrainers}</h5>
        </div>
        <div className="col s12 m4 l4">
          <h5 className="green-text center-align">TOTAL CLIENTS: {this.props.totalClients}</h5>
        </div>
        <div className="col s12 m4 l4">
          <h5 className="green-text center-align">TOTAL USERS: {this.props.totalUsers}</h5>
        </div>
      </div>
    );
  }
});