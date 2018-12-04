import { combineReducers } from 'redux';
import myPosts from './myPosts';
import myProfile from './myProfile';
import myFollowing from './myFollowing';
import myFollowers from './myFollowers';

export default combineReducers({
    myPosts,
    myProfile,
    myFollowing,
    myFollowers
})
