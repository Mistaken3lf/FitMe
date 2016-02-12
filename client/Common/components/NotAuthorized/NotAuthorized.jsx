NotAuthorized = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 l6 offset-l3" id="userLoginForm">
          <div className="card-panel red z-depth-2">
            <h1 className="white-text">Not Authorized!!!</h1>
          </div>
        </div>
      </div>
    );
  }
});