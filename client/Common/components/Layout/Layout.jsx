Layout = React.createClass({
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <div className="layoutContainer">
            {this.props.content}
          </div>
        </main>
      </div>
    );
  }
});