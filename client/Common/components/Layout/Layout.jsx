Layout = React.createClass({
  render() {
    if(Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else {
      return (
        <div>
          <header>
            <Navigation />
          </header>
          <main>
            <div class="layoutContainer">
              {this.props.content}}
            </div>
          </main>
        </div>
      );
    }
  }
});