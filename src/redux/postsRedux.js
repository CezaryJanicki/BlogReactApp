import shortid from 'shortid';

//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);
export const removePost = (payload) => ({ payload, type: REMOVE_POST });
export const addPost = (payload) => ({ payload, type: ADD_POST });
export const editPost = (payload) => ({ payload, type: EDIT_POST });


// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter((post) =>
        post.id === action.payload ? false : true
      );
      case ADD_POST:
        return [...statePart, { ...action.payload, id: shortid() }];
      case EDIT_POST:
        return statePart.map((post) =>
          post.id === action.payload.id ? { ...post, ...action.payload } : post
        );
    default:
      return statePart;
  }
};

export default postsReducer;
