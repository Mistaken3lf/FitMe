import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default class AdminNavigation extends React.Component {
  componentDidMount() {
    //Make mobile sidebar on left side collapsible
    $('.button-collapse').sideNav({
      menuWidth: 210,
      edge: 'left',
      closeOnClick: true
    });
  }

  logout(e) {
    e.preventDefault();
    //Bring user back to home page after logging out
    FlowRouter.go('/');

    //Log user out
    Meteor.logout();
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">FitMe</a>
            <a href="#" data-activates="mobile-menu" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="side-nav" id="mobile-menu">
              <div className="white">
                <img className="sidebarLogo" src="/Navigation/fitMeSidebarLogo.png" />
                <br />
                <hr className="navSeperator" />
              </div>
              <h5 className="white-text blue center" id="usernameText">{this.props.username}</h5>
              <div>
                <h6 className="center-align blue-text">Build: v{this.props.versionNumber}</h6>
              </div>
              <a className="btn blue white-text waves-effect" id="navPad" href="/adminHome">Home</a>
              <a className="btn blue white-text waves-effect" id="navPad" href="/myProfile">Profile</a>
              <a className="btn blue white-text waves-effect" id="navPad" href="/commandCenter">Command Center</a>
              <a className="btn blue white-text waves-effect" id="navPad" href="/changePassword">Change Password</a>
              <a className="btn blue white-text waves-effect logout" id="navPad" onClick={this.logout}  href="#!">Logout</a>
            </ul>
            <ul className="side-nav fixed" id="desktop-menu">
              <div className="white">
                <img className="sidebarLogo" src="/Navigation/fitMeSidebarLogo.png" />
                <br />
                <hr className="navSeperator" />
              </div>
              <h5 className="white-text blue center" id="usernameText">{this.props.username}</h5>
              <div>
                <h6 className="center-align blue-text">Build: v{this.props.versionNumber}</h6>
              </div>
              <a className="btn blue white-text waves-effect" id="navPad" href="/adminHome">Home</a>
              <a className="btn blue white-text waves-effect" id="navPad" href="/myProfile">Profile</a>
              <a className="btn blue white-text waves-effect" id="navPad" href="/commandCenter">Command Center</a>
              <a className="btn blue white-text waves-effect" id="navPad" href="/changePassword">Change Password</a>
              <a className="btn blue white-text waves-effect logout" id="navPad" onClick={this.logout}  href="#!">Logout</a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
