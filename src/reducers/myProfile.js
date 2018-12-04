const initState = {
  name: "Fumika",
  wallpaper: "http://trn.net/wp-content/uploads/2016/04/white-abstract-wallpaper-4.jpg",
  avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
  nickname: "Stupid Bunny",
  job: "Photographer, Gamer",
  hometown: "Tien Giang province",
  address: "Ho Chi Minh city",
  birthday: "Sep 18th",
};

const myProfile = (state = initState, action) => {
  switch (action.type) {
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

    default:
      return state
  }
}

export default myProfile
