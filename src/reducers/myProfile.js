const myProfile = (state = { profileData: null }, action) => {
  switch (action.type) {
    case 'SET_PROFILE_DATA':
      return {
        ...state,
        profileData: Object.assign({}, action.profileData)
      }
    case 'EDIT_PROFILE':
      return state = {
        name: action.name,
        wallpaper: action.wallpaper,
        avatar: action.avatar,
        nickname: action.nickname,
        job: action.job,
        hometown: action.hometown,
        address: action.address,
        birthday: action.birthday,
      }
    case 'LOG_OUT':
      return {
        profileData: null
      }
    default:
      return state;
  }
}

export default myProfile;
