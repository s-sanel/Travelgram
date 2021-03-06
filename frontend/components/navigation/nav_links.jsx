import React from 'react';
import { Link, withRouter } from 'react-router';

class NavLinks extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.profilePage = this.profilePage.bind(this);
    this.uploadPost = this.uploadPost.bind(this);
  }

  profilePage(){
    let id = this.props.currentUser.id;
    this.props.router.push(`users/${id}`);
  }

  uploadPost(){
    this.props.router.push("/upload-post");
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/signup'));
  }

  render() {
      return (
        <div className="main-nav-links">
          <div className="main-nav-explore">
            <a href="#" title="Discover">
            </a>
          </div>
          <div className="upload-photo">
            <Link onClick={this.uploadPost} title="Upload photo" className="pointer">
              <i className="fa fa-camera pointer" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="main-nav-user pointer">
            <Link onClick={this.profilePage} title="Profile page" className="pointer">
              <i className="fa fa-user-o pointer" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="main-nav-logout">
            <Link onClick={this.handleLogout} title="Logout" className="pointer"><i className="fa fa-sign-out pointer" aria-hidden="true"></i></Link>
          </div>
        </div>);
    }

}
export default withRouter(NavLinks);
