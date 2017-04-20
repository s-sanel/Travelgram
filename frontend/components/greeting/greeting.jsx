import React from 'react';
import { Link, withRouter } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/signup'));
  }


  render() {
    if (this.props.currentUser) {
      return (
        <div className="main-nav-links">
        {this.props.currentUser.username} <button onClick={this.handleLogout}>Logout!</button>
        </div>);
    }
    else {
      return (
        <div>
          <p>Not logged</p>
        </div>
      );
    }
  }

}

export default withRouter(Greeting);
