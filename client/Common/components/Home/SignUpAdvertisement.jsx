SignUpAdvertisement = React.createClass({
  componentDidMount() {
    $('.parallax').parallax();
  },

  render() {
    return (
      <section id="parallax-mid">
        <div className="parallax-container center-align">
          <div className="parallax"><img src="/Home/keyboard-lax.jpg" /></div>
          <br />
          <br />
          <br />
          <br />
          <h1 className="header center white-text"></h1>
          <div className="row center">
            <h5 className="header col s12 bold white-text">FitMe finds the perfect balance between the way</h5>
            <br />
            <h5 className="header col s12 bold white-text"> something looks and how it functions.</h5>
          </div>
          <br />
          <br />
          <a href="/register" className="waves-effect waves-light btn blue center-align"><i className="material-icons right">check</i>Sign Up</a>
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    );
  }
});