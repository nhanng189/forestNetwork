import { combineReducers } from 'redux';
import myPosts from './myPosts';
import myProfile from './myProfile';

export default combineReducers({
    myPosts,
    myProfile
})
