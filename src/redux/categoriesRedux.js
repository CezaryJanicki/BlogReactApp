//selectors
export const getAllCategories = (state) => state.categories;
export const getCategoryById = ({posts}, categoryId) => posts.filter((post) => post.category === categoryId);
// actions
// const createActionName = (actionName) => `app/categories/${actionName}`;
// const ADD_CATEGORY = createActionName('ADD_CATEGORY');

// action creators
const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoriesReducer;