// reducers.js
import { ADD_POST } from './actions';
import postsData from './postsData';

const initialState = {
  posts: postsData,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
};

export default rootReducer;

  