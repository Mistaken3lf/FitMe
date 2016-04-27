import React from 'react';

export default class CommonNavigation extends React.Component {
  componentDidMount() {
    //Make mobile sidebar on left side collapsible
    $('.button-collapse').sideNav({
      menuWidth: 210,
      edge: 'left',
      closeOnClick: true
    });
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">FitMe</a>
            <a href="#" data-activates="mobile-menu" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
            <ul className="side-nav" id="mobile-menu">
              <div className="white">
                <img className="sidebarLogo" src="/Navigation/fitMeSidebarLogo.png" />
                <br />
                <hr className="navSeperator" />
              </div>
              <div>
                <h6 className="center-align blue-text">Build: v{this.props.versionNumber}</h6>
              </div>
              <a className="btn blue white-text waves-effect" id="navPad" href="/">Home</a>
              <a className="btn blue white-text waves-effect" id="navPad" href="/login">Login</a>
              <a className="btn blue white-text waves-effect" id="navPad" href="/register">Register</a>
            </ul>
            <ul className="side-nav fixed" id="desktop-menu">
              <div className="white">
                <img className="sidebarLogo" src="/Navigation/fitMeSidebarLogo.png" />
                <br />
                <hr className="navSeperator" />
              </div>
              <div>
                <h6 className="center-align blue-text">Build: v{this.props.versionNumber}</h6>
              </div>
              <a className="btn blue white-text waves-effect" id="navPad" href="/">Home</a>
              <a className="btn blue white-text waves-effect" id="navPad" href="/login">Login</a>
              <a className="btn blue white-text waves-effect" id="navPad" href="/register">Register</a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}