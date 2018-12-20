import axios from 'axios';

export const toggleLove = (id) => {
  return {
    type: 'TOGGLE_LOVE',
    id
  }
}

export const addComment = (id, user, comment) => {
  return {
    type: 'ADD_COMMENT',
    id,
    commentContent: {
      user: user,
      content: comment
    }
  }
}

export const editProfile = (name) => {
  return {
    type: 'EDIT_PROFILE',
    name
  }
}

export const getProfileData = (publicKey) => async (dispatch, getState) => {
  let res;
  try {
    res = await axios.get('http://35.243.137.115:3000/account' + publicKey )
  }
  catch(err) {
    return;
  }
  console.log(res);
  dispatch(setProfileData(res.data.data));
}

export const setProfileData = (profileData) => {
  return {
    type: 'SET_PROFILE_DATA',
    profileData
  }
}