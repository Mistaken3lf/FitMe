AccountTable = React.createClass({
  render() {
    return (
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Plan Type</th>
            <th>Date Purchased</th>
            <th>Expires</th>
            <th>Status</th>
            <th>Total Clients</th>
            <th>Client Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.accountData.planType}</td>
            <td>{this.props.accountData.datePurchased}</td>
            <td>{this.props.accountData.expiresOn}</td>
            <td>{this.props.accountData.userStatus}</td>
            <td>{this.props.clientCount}</td>
            <td>{this.props.accountData.clientLimit}</td>
          </tr>
        </tbody>
      </table>
    );
  }
});