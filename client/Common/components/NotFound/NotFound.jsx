NotFound = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 l6 offset-l3" id="userLoginForm">
          <div className="card-panel green z-depth-2">
            <div className="row">
              <div className="col s12 center">
                <i className="white-text large material-icons">assignment_late</i>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align">
               <h5 className="white-text">The page your are trying to view does not exist.
               please check that you have spelled everything correctly. If you are still
               having problems please contact FitMe, Thanks.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});