const initState = [
  {
    id: 1,
    avatar: "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
    user: "Fumika Chan",
    time: "An hour ago",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat fringilla odio vitae gravida.！",
    images: ["https://pbs.twimg.com/media/Drtt3q7X4AAkJwH.jpg:large"],
    tags: ["girl", "sexy"],
    love: 12,
    comment: 1,
    loved: false,
    commentContent: [
      {
        user: "Akane",
        content: "Nice"
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
    tags: ["girl", "sexy"],
    love: 45,
    comment: 1,
    loved: false,
    commentContent: [
      {
        user: "Akane",
        content: "Nice"
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
    tags: ["girl", "sexy"],
    love: 8,
    comment: 1,
    loved: false,
    commentContent: [
      {
        user: "Akane",
        content: "Nice"
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
    tags: ["girl", "sexy"],
    love: 32,
    comment: 1,
    loved: false,
    commentContent: [
      {
        user: "Akane",
        content: "Nice"
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
    tags: ["girl", "sexy"],
    love: 1,
    comment: 1,
    loved: false,
    commentContent: [
      {
        user: "Akane",
        content: "Nice"
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
    tags: ["girl", "sexy"],
    love: 4,
    comment: 1,
    loved: false,
    commentContent: [
      {
        user: "Akane",
        content: "Nice"
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
    tags: ["girl", "sexy"],
    love: 65,
    comment: 1,
    loved: false,
    commentContent: [
      {
        user: "Akane",
        content: "Nice"
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

    case 'ADD_COMMENT':
      return state.map((post) => {
        if (post.id === action.id) {
          post.commentContent.push(action.commentContent);
          post.comment = post.comment + 1;
        }
        return post;
      })

    default:
      return state
  }
}

export default myPosts
