import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follows_actions';
import { getIndexById } from '../util/util';
import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      return merge({}, action.user);
    case RECEIVE_FOLLOW:
      let copyAddFollow = merge({}, oldState);
      copyAddFollow.followers.push(action.follow.follower);
      return copyAddFollow;
    case REMOVE_FOLLOW:
      let copyRemFollow = merge({}, oldState);
      let followeeIndex = getIndexById(copyRemFollow.followers, action.follow.follower_id);
      copyRemFollow.followers.splice(followeeIndex, 1);
      return copyRemFollow;
    default:
      return oldState;
  }
};

export default UsersReducer;
