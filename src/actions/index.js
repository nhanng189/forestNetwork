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