import axios from 'axios';

export const getProfileData = (publicKey) => async (dispatch, getState) => {
  let res;
  try {
    res = await axios.get('http://35.243.137.115:3000/account/' + publicKey)
  }
  catch (err) {
    return;
  }
  dispatch(setProfileData(res.data));
}

export const setProfileData = (profileData) => {
  return {
    type: 'SET_PROFILE_DATA',
    profileData
  }
}