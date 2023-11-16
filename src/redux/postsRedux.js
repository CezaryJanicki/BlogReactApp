//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);
export const removePost = (payload) => ({ payload, type: REMOVE_POST });


// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter((post) =>
        post.id === action.payload ? false : true
      );
    default:
      return statePart;
  }
};

export default postsReducer;
