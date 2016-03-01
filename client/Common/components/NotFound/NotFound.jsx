NotFound = React.createClass({
  render() {
    const styles = {
      imageStyle: {
        height: "100vh"
      }
    };

    return (
      <img src="/Home/lost2.jpg" style={styles.imageStyle} className="responsive-img" />
    );
  }
});