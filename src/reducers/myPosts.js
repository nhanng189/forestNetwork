const initState = [
  {
    id: 1,
    avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
    user: "Fumika Chan",
    time: "An hour ago",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
    images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
    love: 12,
    comment: 3,
    loved: false,
    commentContent: [
      {
        user: "",
        content: ""
      }
    ]
  },
  {
    id: 2,
    avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
    user: "Fumika Chan",
    time: "An hour ago",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
    images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
    love: 45,
    comment: 2,
    loved: false,
    commentContent: [
      {
        user: "",
        content: ""
      }
    ]
  },
  {
    id: 3,
    avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
    user: "Fumika Chan",
    time: "An hour ago",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
    images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
    love: 8,
    comment: 4,
    loved: false,
    commentContent: [
      {
        user: "",
        content: ""
      }
    ]
  },
  {
    id: 4,
    avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
    user: "Fumika Chan",
    time: "An hour ago",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
    images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
    love: 32,
    comment: 4,
    loved: false,
    commentContent: [
      {
        user: "",
        content: ""
      }
    ]
  },
  {
    id: 5,
    avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
    user: "Fumika Chan",
    time: "An hour ago",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
    images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
    love: 1,
    comment: 12,
    loved: false,
    commentContent: [
      {
        user: "",
        content: ""
      }
    ]
  },
  {
    id: 6,
    avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
    user: "Fumika Chan",
    time: "An hour ago",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
    images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
    love: 4,
    comment: 7,
    loved: false,
    commentContent: [
      {
        user: "",
        content: ""
      }
    ]
  },
  {
    id: 7,
    avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
    user: "Fumika Chan",
    time: "An hour ago",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
    images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
    love: 65,
    comment: 8,
    loved: false,
    commentContent: [
      {
        user: "",
        content: ""
      }
    ]
  }
];

const myPosts = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOVE':
      return state.map((post) => {
        if (post.id === action.id) {
          if (post.loved === false) {
            post.loved = true;
            post.love = post.love + 1;
          }
          else {
            post.loved = false;
            post.love = post.love - 1;
          }
        }
        return post;
      })
    default:
      return state
  }
}

export default myPosts
