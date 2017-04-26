import React from 'react';
import {Link, withRouter} from 'react-router';
import Spinner from '../shared/spinner';

class UserProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToEdit = this.redirectToEdit.bind(this);
  }

  componentDidMount(){

  }
  //
  componentWillReceiveProps(newProps){
    // debugger
    // if(this.props.user.id != newProps.params.user_id){
    //   this.props.fetchPosts();
    //   this.props.fetchUser(parseInt(this.props.params.user_id));
    // }
  }

  redirectToEdit(){
    this.props.router.push(`/users/${this.props.user.id}/edit`);
  }

  followingOrEditButton(){
    if(this.props.user.id == this.props.currentUser.id){
      return(
        <button onClick={this.redirectToEdit} className="profile-edit-btn">Edit Profile</button>
      );
    }else {
      return(
        <button className="profile-edit-btn">Follow/Unfollow</button>
      );
    }
  }

  render(){
// debugger
    let user = this.props.user;
    if (!user.name) return <Spinner />;

    let name = this.props.user ? user.name : "";
    let profile_photo = this.props.user ? user.profile_photo : "";

    return(
      <header className="user-profile-header">
        <div className="user-profile-logo">
          <div className="user-profile-img">
            <img src={profile_photo} width="150px" height="150px" title="profile img"/>
          </div>
        </div>
        <div className="user-profile-data">

          <div className="profile-data-username">
            <span className="profile-name">{this.props.user.username}</span>
            {this.followingOrEditButton()}
            <Link className="gear"><i className="fa fa-cog" aria-hidden="true"></i></Link>
          </div>


          <div className="profile-data-stats">
            <div className="profile-data-stats-data">
              {this.props.posts.length} posts
            </div>
            <div className="profile-data-stats-data">
              followers
            </div>
            <div className="profile-data-stats-data">
              following
            </div>
          </div>

          <div className="profile-data-stats">
            <div className="profile-data-stats-data">
              {name}
            </div>
            <div className="profile-data-stats-data">
              Bio...
            </div>

          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(UserProfileDetails);
